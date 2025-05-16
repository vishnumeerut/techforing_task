// models/Job.js

const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    jobType: {
        type: String,
        required: true,
        enum: ["Full-time", "Part-time", "Contract", "Internship"]
    },
    salary: {
        type: String,
        default: null,
        trim: true
    },
    experience: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    skills: {
        type: String,
        required: true,
        trim: true
    },
    }, {
    timestamps: true
});

const Job = mongoose.model("job", JobSchema);
module.exports = Job;
