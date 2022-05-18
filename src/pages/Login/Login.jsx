import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../context/firebasecontext";

const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const {firebaseInit}=useContext(FirebaseContext);
  // console.log(firebaseInit.auth());

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const loginHandler=async(e)=>{
    e.preventDefault();
    try{
      await firebaseInit.auth().signInWithEmailAndPassword(emailAddress, password);
      console.log('yay')
    }catch(error){
      console.log(error);
      setError(error.message)
    }
  }
 
  return (
    <div className="container flex h-screen mx-auto items-center max-w-screen-md justify-center">
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            CAPTCHA
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={loginHandler}>
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-red-medium text-white w-full rounded h-8 font-bold
            ${isInvalid && "opacity-50"}`}
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link to="/signup" className="font-bold text-blue-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
