import { useSignup } from "../hooks/useSignup";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
function Signup() {
  const { signupWithGoogle, user, error } = useSignup();
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-96  w-full items-center">
        <FormInput type="text" label="Name:" />
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
          <p className="text-center flex gap-2 text-cente">
            Are you alredy registered?
            <Link to="/signin" className="link text-cyan-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
