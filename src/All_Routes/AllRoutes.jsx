import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Jobs from "../pages/Jobs/Jobs";
import SignUp from "../pages/Signup/Signup";
import SignIn from "../pages/Signin/Signin";


function AllRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/jobs" element={<Jobs />}/>
            <Route path="/auth/signup" element={<SignUp />}/>
            <Route path="/auth/signin" element={<SignIn />}/>
        </Routes>
    )
}

export default AllRoutes;