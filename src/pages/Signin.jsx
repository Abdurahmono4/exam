import { useSignup } from "../hooks/useSignup";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Form, useActionData } from "react-router-dom";

import FormInput from "../components/FormInput";
import useLogin from "../hooks/useLogin";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("Email");
  let password = formData.get("Password");

  return { email, password };
};

function Signin() {
  const userSignin = useActionData();
  const { signInEmailAndPassword } = useLogin();

  useEffect(() => {
    if (userSignin) {
      signInEmailAndPassword(userSignin.email, userSignin.password);
    }
  }, [userSignin]);

  const { signupWithGoogle, user, error } = useSignup();
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-96 w-full">
        <Form method="post">
          <FormInput type="email" label="Email:" name="Email" />
          <FormInput type="password" label="Password:" name="Password" />
          <div>
            <button className="btn btn-secondary w-full mb-3" type="sumbit">
              Sumbit
            </button>
            <button
              type="button"
              onClick={signupWithGoogle}
              className="btn btn-secondary w-full mb-5"
            >
              <FcGoogle className="text-3xl" />
              <span className="text-xl">Google</span>
            </button>
            <p className="text-center">
              If you dont have account
              <Link className="link text-cyan-400" to="/signup">
                Signup
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signin;
