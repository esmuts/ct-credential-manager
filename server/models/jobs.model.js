// I consulted the following site for help –
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

import mongoose from "mongoose";

// Database schema
const jobSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ["submitted", "in progress", "completed"],
    required: true,
    default: "submitted",
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
  hidden: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// Compile model from Schema

export const Job = mongoose.model("Job", jobSchema);
