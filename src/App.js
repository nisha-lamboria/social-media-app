import { lazy } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const Login=lazy(()=>import('./pages/Login/Login'));
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
