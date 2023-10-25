import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

type BaseQueryParams = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
>

// create a new mutex
const mutex = new Mutex()
const baseQuery = fetchBaseQuery({ baseUrl: '/' })

export const makeBaseQuery = async () => {
  const baseQueryWithReauth: BaseQueryParams = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
      // checking whether the mutex is locked
      if (!mutex.isLocked()) {
        const release = await mutex.acquire()
        try {
          const refreshResult = await baseQuery(
            '/refreshToken',
            api,
            extraOptions
          )
          if (refreshResult.data) {
            api.dispatch(tokenReceived(refreshResult.data))
            // retry the initial query
            result = await baseQuery(args, api, extraOptions)
          } else {
            api.dispatch(logUserOut())
          }
        } finally {
          // release must be called once the mutex should be released again.
          release()
        }
      } else {
        // wait until the mutex is available without locking it
        await mutex.waitForUnlock()
        result = await baseQuery(args, api, extraOptions)
      }
    }
    return result
  }
  return baseQueryWithReauth
}

