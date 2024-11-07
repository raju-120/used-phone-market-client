import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import googlePhoto from "../../assets/logo/Google__G__Logo.svg.webp";
import facebookPhoto from "../../assets/logo/Facebook_f_logo_(2021).svg.png";
import useToken from "../../UseHooks/UseToken/useToken";
import useTitle from "../../UseHooks/UseTitle/UseTitle";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignUp = () => {
  useTitle("SignUp");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser, googleLogin, facebookLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  /* const [createdEmail,setCreatedEmail] = useState(''); */
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [visible, setVisible] = useState("");
  const [password, setPassword] = useState("");
  const [token] = useToken(createdUserEmail);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleSignup = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully");

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => setSignUpError(err));
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err?.message);
      });

    const saveUser = (name, email) => {
      const user = { name, email };

      fetch("https://used-product-server-raju-120.vercel.app/emailusers", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          setCreatedUserEmail(email);
          console.log(data);
        });
    };
  };

  const handleGoogleLogIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          name: user.displayName,
          email: user.email,
        };
        fetch("https://used-product-server-raju-120.vercel.app/emailusers", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Successfully user created with Google");
            navigate("/");
          });
      })
      .catch((err) => console.error(err));
  };

  /* const handleFaceBookLogIn = () =>{
        facebookLogin()
            .then(result =>{
                const user = result.user;
                console.log(user);
                toast.success('Successfully user signUp with Facebook.')
            })
            .catch(err => console.error(err))
    } */

  return (
    <div className="w-full py-10 bg-base-200 flex justify-center">
      <div className="bg-base-200 rounded-xl p-5 w-full max-w-screen-md mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
          Register now as a Buyer
        </h1>

        <div className="flex justify-center">
          <div className="card w-full max-w-lg shadow-2xl bg-base-100 rounded-lg p-8">
            <form onSubmit={handleSubmit(handleSignup)} className="space-y-6">
              {/* Full Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered w-full"
                  {...register("name", { required: "Name required" })}
                />
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  {...register("email", { required: "Email Address required" })}
                />
                {errors.email && (
                  <p className="text-red-600 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={visible ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered w-full"
                    {...register("password", {
                      required: "Password required",
                      pattern: {
                        message:
                          "Password must have uppercase, number, and special characters",
                      },
                    })}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {visible ? (
                    <AiOutlineEyeInvisible
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEye
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
                {errors.password && (
                  <p className="text-red-500 mt-1">{errors.password.message}</p>
                )}
                <label className="label mt-2">
                  <Link to="/reset" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring focus:ring-blue-300 transform hover:scale-105 transition duration-300"
              >
                Sign Up
              </button>

              {/* Display Signup Error */}
              {signUpError && (
                <p className="text-red-500 text-center mt-2">{signUpError}</p>
              )}
            </form>

            {/* Already Registered? Login Link */}
            <p className="text-center mt-5">
              Already registered?
              <Link
                to="/login"
                className="text-blue-500 font-bold ml-1 hover:text-blue-700"
              >
                Login
              </Link>
            </p>

            {/* Google Sign-Up */}
            <div
              onClick={handleGoogleLogIn}
              className="btn flex items-center justify-center mt-4 gap-2"
            >
              <span>Sign-up with Google</span>
              <img src={googlePhoto} alt="Google Icon" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
