import { useSignup } from "../hooks/useSignup";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
function Signup() {
  const { signupWithGoogle, user, error } = useSignup();
  console.log(user);
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-96  w-full items-center">
        <button
          onClick={signupWithGoogle}
          className="btn btn-secondary w-full mb-5"
        >
          <FcGoogle className="w-10 h-10 mr-2 " />
          <span className="text-2xl">Google</span>
        </button>
        <p className="text-center">
          Are you alredy registered?
          <Link to="/signin" className="link text-cyan-500">
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
