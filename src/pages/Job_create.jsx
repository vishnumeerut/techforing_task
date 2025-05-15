
function JobCreate () {
    return (
        <div class="max-w-2xl mx-auto p-4 sm:p-8 bg-white rounded-lg shadow-lg mt-6">
  <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-600">
    Create a New Job
  </h2>
  <form class="space-y-4">
    {/* <!-- Job Title --> */}
    <div>
      <label class="block font-medium mb-1" for="title">
        Job Title <span class="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="title"
        name="title"
        class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g., Frontend Developer"
        required
      />
    </div>

    {/* <!-- Company Name --> */}
    <div>
      <label class="block font-medium mb-1" for="company">
        Company Name <span class="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="company"
        name="company"
        class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g., Tech Corp"
        required
      />
    </div>

    {/* <!-- Location --> */}
    <div>
      <label class="block font-medium mb-1" for="location">
        Location <span class="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="location"
        name="location"
        class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g., Remote / Mumbai"
        required
      />
    </div>

    {/* <!-- Job Type --> */}
    <div>
      <label class="block font-medium mb-1" for="jobType">
        Job Type <span class="text-red-500">*</span>
      </label>
      <select
        id="jobType"
        name="jobType"
        class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      >
        <option value="">Select Job Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>
    </div>

    {/* <!-- Salary Range --> */}
    <div>
      <label class="block font-medium mb-1" for="salary">
        Salary Range
      </label>
      <input
        type="text"
        id="salary"
        name="salary"
        class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g., ₹50k - ₹80k"
      />
    </div>

    {/* <!-- Experience Required --> */}
    <div>
      <label class="block font-medium mb-1" for="experience">
        Experience Required <span class="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="experience"
        name="experience"
        class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g., 1-3 years"
        required
      />
    </div>

    {/* <!-- Job Description --> */}
    <div>
      <label class="block font-medium mb-1" for="description">
        Job Description <span class="text-red-500">*</span>
      </label>
      <textarea
        id="description"
        name="description"
        rows="4"
        class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Describe the job role and responsibilities"
        required
      ></textarea>
    </div>

    {/* <!-- Skills Required --> */}
    <div>
      <label class="block font-medium mb-1" for="skills">
        Skills Required <span class="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="skills"
        name="skills"
        class="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g., React, Node.js, MongoDB"
        required
      />
    </div>

    {/* <!-- Submit Button --> */}
    <div class="text-center">
      <button
        type="submit"
        class="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Create Job
      </button>
    </div>
  </form>
</div>

    )
}

export default JobCreate;