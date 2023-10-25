import { GoogleLogin } from "@react-oauth/google";
import { BasePage } from "../../../components/BasePage";
import { UsernamePasswordLogin } from "../components/UsernamePasswordLogin";

export const Login = () => {

  const handleGoogleLoginSuccess = (credentialsResponse: unknown) => {
    console.log("google cred response: ", credentialsResponse)
  }

  return (
    <BasePage>
      <div className="flex justify-center items-center max-w-2xl mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <UsernamePasswordLogin />
          <GoogleLogin 
            onSuccess={handleGoogleLoginSuccess}
            useOneTap
            auto_select
          />
        </div>
      </div>
    </BasePage>
  );
};
