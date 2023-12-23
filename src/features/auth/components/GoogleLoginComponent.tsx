import { CodeResponse, useGoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "../../../state/store";
import { toast } from "react-toastify";
import { LoadingIcon } from "../../../shared/components/Loading";
import { useGoogleLoginMutation } from "../state/services/authApi";
import { newUserState } from "../state/user";

export const GoogleLoginComponent = () => {
  const [login, { isLoading }] = useGoogleLoginMutation();
  const dispatch = useAppDispatch()



  const handleGoogleLoginSuccess = async (
    codeResponse: CodeResponse,
  ) => {
    console.log("google cred response: ", codeResponse);
    try {
      const user = await login(codeResponse)
        .unwrap();
      dispatch(newUserState(user))
    } catch (error) {
      console.log("error: ", error)
      toast.error("failed to get user info")
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    flow: "auth-code",
  })

  if (isLoading) {
    return <LoadingIcon />;
  }
  return <button type="button" onClick={googleLogin}>glogin</button>
};
