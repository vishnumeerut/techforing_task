import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Jobs from "../pages/Jobs/Jobs";
import SignUp from "../pages/Signup/Signup";
import SignIn from "../pages/Signin/Signin";
import JobCreate from "../pages/Job_create";
import AllJobs from "../pages/All_Jobs/All_Jobs";


function AllRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/jobs" element={<Jobs />}/>
            <Route path="/auth/signup" element={<SignUp />}/>
            <Route path="/auth/signin" element={<SignIn />}/>
            <Route path="/createjobs" element={<JobCreate />}/>
            <Route path="/alljobs" element={<AllJobs />}/>
        </Routes>
    )
}

export default AllRoutes;