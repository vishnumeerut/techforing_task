import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllJobs() {

    const [jobs, setJobs] = useState([])
    async function fetchAllJobs () {
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}job`)
            console.log("response", response.data.jobs)
            setJobs(response?.data?.jobs)
        }
        catch(error) {
            console.log("error while fetchin all jobs", error)
        }
    }

   useEffect(() => {
    fetchAllJobs()
   }, []) 
  return (
    <div className="max-w-3xl mx-auto p-6">
        <button className="text-xl bg-blue-500 text-white px-2 py-1 cursor-pointer rounded-md mb-4">  <Link to={"/createjobs"}>Create a job</Link> </button>
    {
        jobs && jobs.map((item) => (
                  <div className="bg-white  mb-4 border border-gray-300 rounded-2xl shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>

        <div className="text-gray-600">
          <p>
            <span className="font-medium">Company:</span> {item.company}
          </p>
          <p>
            <span className="font-medium">Location:</span> {item.location}
          </p>
          <p>
            <span className="font-medium">Job Type:</span> {item.jobType}
          </p>
          <p>
            <span className="font-medium">Salary:</span> {item.salary}
          </p>
          <p>
            <span className="font-medium">Experience:</span> {item.experience}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1 text-gray-700">
            Job Description
          </h3>
          <p className="text-gray-700 leading-relaxed">
        {item.description}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1 text-gray-700">
            Skills Required
          </h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{item.skills}</li>

          </ul>
        </div>
      </div>
        ))
    }

    </div>
  );
}

export default AllJobs;
