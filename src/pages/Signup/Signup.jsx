import { useState,useContext,useRef } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../context/firebasecontext";
import { userExists } from "../../services/firebaseServices";

const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const emailRef=useRef("");
  const passwordRef=useRef("");
  const userNameRef=useRef("");
  const fullNameRef=useRef("");

  const {firebaseInit}=useContext(FirebaseContext);  

  const [error, setError] = useState("");
  const isInvalid = passwordRef === "" || emailRef === "";

  const signupHandler=async(e,userNameRef,fullNameRef,emailRef,passwordRef)=>{
    e.preventDefault();
    const ifUserNameExists=await userExists(userNameRef.current.value);
    if(ifUserNameExists===0){
      try{
        const createdUser=await firebaseInit
        .auth()
        .createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value);

        await firebaseInit
        .firestore()
        .collection('users')
        .add({
          userId:createdUser.user.uid,
          username: userNameRef.current.value.toLowerCase(),
          fullName:fullNameRef.current.value,
          emailAddress: emailRef.cureent.value.toLowerCase(),
          following: ['2'],
          followers: [],
          dateCreated: Date.now()
        });
        console.log("user created");
      }catch(error){
        setError(error.message);
      }
    }else{
      userNameRef.current.value="";
      setError('UserName already exists!')
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

          <form onSubmit={(e)=>signupHandler(e,userNameRef,fullNameRef,emailRef,passwordRef)}>
          <input
              aria-label="Enter your user name"
              type="text"
              placeholder="User Name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              // onChange={({ target }) => setUserName(target.value)}
              ref={userNameRef}
            />
            <input
              aria-label="Enter your full name"
              type="text"
              placeholder="Full Name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              // onChange={({ target }) => setUserName(target.value)}
              ref={fullNameRef}
            />
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              // onChange={({ target }) => setEmailAddress(target.value)}
              ref={emailRef}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              ref={passwordRef}
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
            <Link to="/" className="font-bold text-blue-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
