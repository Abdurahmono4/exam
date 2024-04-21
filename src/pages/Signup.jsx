import { useSignup } from "../hooks/useSignup";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
function Signup() {
  const { signupWithGoogle, user, error } = useSignup();
  console.log(user);
  return (
    <div className="min-h-screen grid place-items-center">
      <div>
        <button onClick={signupWithGoogle} className="btn btn-secondary">
          <FcGoogle className="w-10 h-10 mr-2 " />
          <span className="text-2xl">Google</span>
        </button>
        <p>
          Are you alredy registre
          <Link to="/signin">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
