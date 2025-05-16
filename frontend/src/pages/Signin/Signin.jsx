import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import UserContext from "../../context/user";
function SignIn() {

    const initialState = {email:"", password:""}
    const [formData, setFormData] = useState(initialState)
    const navigator = useNavigate()

    const {usertoken, setUserToken} = useContext(UserContext)
  
  
    function handleFormData(e){
      const {name, value} = e.target;
      setFormData((prev) => (
        {...prev, [name]:value}
      ))
    }
    async function handleFormSubmission(e) {
      e.preventDefault()
         try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}user/signin`, formData);
        console.log("Token is:", response.data.data);
        setUserToken((prev) => (
          {...prev, token:response.data.data}
        ))
        toast.success(`${response.data.msg}`)
        navigator("/createjobs")
      } catch (error) {
        console.error("Error sending data:", error);
      }
      setFormData(initialState)
  
    }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-700">
          Login Here
        </h1>

        <form className="flex flex-col gap-4" onSubmit={(e) => handleFormSubmission(e)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              onChange={(e) => handleFormData(e)}
              value={formData.email}
              type="text"
              id="email"
              name="email"
              placeholder="Email here..."
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              onChange={(e) => handleFormData(e)}
              value={formData.password}
              type="password"
              id="password"
              name="password"
              placeholder="Password here..."
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Submit
          </button>
        </form>

        {/* Additional line below the form */}
        <p className="mt-4 text-center text-sm text-gray-600">
          If you don't have an account.{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            <Link to={"/auth/signup"} >Register here</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
