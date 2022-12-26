import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import  Header  from "./components/Header";
import { ForgotPassword } from "./page/ForgotPassword";
import { Home } from "./page/Home";
import { Offers } from "./page/Offers";
import { Profile } from "./page/Profile";
import { SignIn } from "./page/SignIn";
import { SignUp } from "./page/SignUp";


function App() {

  return (
    <div className="App">
       
       
    
    <Router>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/profile" element = {<Profile/>} />
        <Route path = "/forgotassword" element = {<ForgotPassword/>} />
        <Route path = "/offers" element = {<Offers/>} />
        <Route path = "/sign-in" element = {<SignIn/>} />
        <Route path = "/signup" element = {<SignUp/>} />

        
      </Routes>
    </Router>
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
  );
}

export default App;
