import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../context/firebasecontext";
import { useUserOnAuth } from "../context/userContext";

const Header = () => {
  const { firebaseInit } = useContext(FirebaseContext);
  const { user } = useUserOnAuth();
//   console.log(user)
  return (
    <header className="h-16 m-4 ">
      <div className="container h-full text-red-medium">
        <div className="flex justify-between h-full">
          <h1 className="text-center flex items-center font-medium text-xl">
            <Link to="/home">CAPTURE</Link>
          </h1>
          <div className="text-center flex items-center ">
            {user ? (
              <>
                <Link to="/home">
                  <svg
                    className="w-8 mr-6 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </Link>
                <button
                  type="button"
                  onClick={() => firebaseInit.auth().signOut()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      firebaseInit.auth().signOut();
                    }
                  }}
                >
                  <svg
                    className="w-8 mr-6 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
                <div className="flex items-center cursor-pointer">
                    <Link to={`/profile/${user.displayName}`}>
                        <img
                        className="rounded-full h-8 w-8"
                        src={`/images/avatars/${user.displayName}.jpg`}
                        alt={`${user.displayName}profile`}
                        />
                    </Link>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
