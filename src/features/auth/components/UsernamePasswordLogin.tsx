import { useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../state/store";
import { LoadingIcon } from "../../../shared/components/Loading";
import { LoginRequest, useUsernamePasswordLoginMutation } from "../state/services/authApi";
import { newUserState } from "../state/user";

export const UsernamePasswordLogin = () => {
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState<LoginRequest>({
    username: "",
    password: "",
  });

  const [login, { isLoading }] = useUsernamePasswordLoginMutation();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const handleUserLogin = async () => {
    try {
      const user = await login(formState).unwrap();
      dispatch(newUserState(user));
    } catch (err) {
      toast.error("Could not login. Please try again");
    }
  };

  if (isLoading) {
    return <LoadingIcon />;
  }

  return (
    <form className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Sign in
      </h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="name@company.com"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
        >
          Your password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex items-start">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <div className="text-sm ml-3">
            <label
              htmlFor="remember"
              className="font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
        <a
          href="#"
          className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
        >
          Lost Password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleUserLogin}
      >
        Login to your account
      </button>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          Create account
        </a>
      </div>
    </form>
  );
};
