import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";
function SignUp() {

  const initialState = {username:"", email:"", password:""}
  const [formData, setFormData] = useState(initialState)
  const navigator = useNavigate()


  function handleFormData(e){
    const {name, value} = e.target;
    setFormData((prev) => (
      {...prev, [name]:value}
    ))
  }
  async function handleFormSubmission(e) {
    e.preventDefault()
       try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}user/signup`, formData);
      console.log("Server response:", response.data.data.username);
      toast.success(`${response.data.data.username} is new User`)
      navigator("/auth/signin")
    } catch (error) {
      console.error("Error sending data:", error);
    }
    setFormData(initialState)

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-700">
          Register Here
        </h1>

        <form className="flex flex-col gap-4" onSubmit={(e) => handleFormSubmission(e)}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              onChange={(e) => handleFormData(e)}
              value={formData.username}
              type="text"
              id="username"
              name="username"
              placeholder="Username here..."
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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
          If you already have an account.{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            <Link to={"/auth/signin"}>Login here</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
