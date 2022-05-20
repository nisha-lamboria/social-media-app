import { lazy, Suspense } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { UserOnAuthProvider } from "./context/userContext";
import Home from "./pages/Home/Home";

const Login=lazy(()=>import('./pages/Login/Login'));
const Signup=lazy(()=>import('./pages/Signup/Signup'));
const Profile=lazy(()=>import('./pages/Profile/Profile'));
const NotFound=lazy(()=>import('./pages/NotFound/NotFound'));
function App() {
  return (
    <div >
      <UserOnAuthProvider>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </Suspense>
      </Router> 
      </UserOnAuthProvider>
    </div>
  );
}

export default App;
