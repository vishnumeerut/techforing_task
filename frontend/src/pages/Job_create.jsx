import { useContext, useState } from "react";
import UserContext from "../context/user";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function JobCreate() {
    const {usertoken} = useContext(UserContext)
    const initialState = {
    title: "",
    company: "",
    location: "",
    jobType: "",
    salary: "",
    experience: "",
    description: "",
    skills: "",
  }
  const [formData, setFormData] = useState(initialState);
console.log("job data  is:-", formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}job`, formData,     {
      headers: {
        Authorization: `Bearer ${usertoken.token}`, // Attach token here
      },
    });
      console.log("Job Created:", res.data);
      toast.success(res.data.msg)
      setFormData(initialState);
    } catch (error) {
      console.error("Error creating job:", error.response?.data || error.message);
    }
  }

  return (
    <div class="max-w-2xl mx-auto p-4 sm:p-8 bg-white rounded-lg shadow-lg mt-6">
      <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-600">
        Create a New Job  <span className="bg-blue-500 px-2 py-1 rounded-2xl text-xl text-white cursor-pointer">  <Link to={"/alljobs"}>View All Jobs</Link> </span>
      </h2>
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Job Title */}
      <div>
        <label className="block font-medium mb-1" htmlFor="title">
          Job Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="e.g., Frontend Developer"
          required
        />
      </div>

      {/* Company Name */}
      <div>
        <label className="block font-medium mb-1" htmlFor="company">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="e.g., Tech Corp"
          required
        />
      </div>

      {/* Location */}
      <div>
        <label className="block font-medium mb-1" htmlFor="location">
          Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="e.g., Remote / Mumbai"
          required
        />
      </div>

      {/* Job Type */}
      <div>
        <label className="block font-medium mb-1" htmlFor="jobType">
          Job Type <span className="text-red-500">*</span>
        </label>
        <select
          id="jobType"
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      {/* Salary Range */}
      <div>
        <label className="block font-medium mb-1" htmlFor="salary">
          Salary Range
        </label>
        <input
          type="text"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="e.g., ₹50k - ₹80k"
        />
      </div>

      {/* Experience Required */}
      <div>
        <label className="block font-medium mb-1" htmlFor="experience">
          Experience Required <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="e.g., 1-3 years"
          required
        />
      </div>

      {/* Job Description */}
      <div>
        <label className="block font-medium mb-1" htmlFor="description">
          Job Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Describe the job role and responsibilities"
          required
        ></textarea>
      </div>

      {/* Skills Required */}
      <div>
        <label className="block font-medium mb-1" htmlFor="skills">
          Skills Required <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="e.g., React, Node.js, MongoDB"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        {usertoken.token.length > 1 && (
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Create Job
          </button>
        )}
      </div>
    </form>
    </div>
  );
}


export default JobCreate;
