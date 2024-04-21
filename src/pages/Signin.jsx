import { useSignup } from "../hooks/useSignup";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
function Signup() {
  const { signupWithGoogle, user, error } = useSignup();

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-96  w-full items-center">
        <FormInput type="email" label="Email:" />
        <FormInput type="password" label="Password:" />
        <div>
          <button
            onClick={signupWithGoogle}
            className="btn btn-secondary w-full mb-5"
          >
            <FcGoogle className="w-10 h-10 mr-2 " />
            <span className="text-2xl">Google</span>
          </button>
          <p className="text-center">
            If you don't have account
            <Link to="/signup" className="link text-cyan-500">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
