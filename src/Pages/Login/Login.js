import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pic from "../../assets/images/login.jpg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import googlePhoto from "../../assets/logo/Google__G__Logo.svg.webp";
import useTitle from "../../UseHooks/UseTitle/UseTitle";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Login = () => {
  useTitle("Login");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, googleLogin } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");
  const [visible, setVisible] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleLogIn = () => {
    googleLogin().then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("Successfully user login with Google");
      navigate("/");
    });
  };

  /* const handleFaceBookLogIn = () =>{
        facebookLogin() 
            .then(result =>{
                const user = result.user;
                console.log(user);
                toast('Successfully user login with Facebook.');
                navigate('/') 
            })
    }
 */

  return (
    <div className="w-full bg-base-200 py-10">
      <div className="w-full max-w-screen-lg mx-auto p-5 rounded-xl">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8">
          Login Now
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img
              src={pic}
              className="rounded-lg w-3/4 md:w-1/2 lg:w-full"
              alt="Login Illustration"
            />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-base-100 shadow-2xl rounded-lg p-6">
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email@example.com"
                  className="input input-bordered w-full"
                  {...register("email", { required: "Email Address required" })}
                />
                {errors.email && (
                  <p className="text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label htmlFor="password" className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
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
                <label className="label">
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
                Login
              </button>

              {/* Error Message */}
              {loginError && <p className="text-red-500 mt-2">{loginError}</p>}
            </form>

            {/* Signup Link */}
            <p className="text-center mt-5">
              New to used-phone?
              <Link
                to="/SelectSignUpRole"
                className="text-blue-500 font-bold ml-1 hover:text-blue-700"
              >
                Sign Up
              </Link>
            </p>

            {/* Google Login */}
            <div
              onClick={handleGoogleLogIn}
              className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 py-2 px-4 mt-5 rounded-lg cursor-pointer transition duration-200"
            >
              <img
                src={googlePhoto}
                alt="Google Icon"
                className="w-5 h-5 mr-2"
              />
              <span>Sign-in with Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
