
const mongoose = require("mongoose");

const serviceRequestSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    category: {
      type: String,
      enum: [
        "Computer",
        "Classroom Equipment",
        "Internet",
        "Hostel Maintenance",
        "Electrical",
        "Library",
        "Other"
      ],
      required: true
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium"
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Under Review",
        "Assigned",
        "In Progress",
        "Resolved",
        "Closed",
        "Rejected"
      ],
      default: "Pending"
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },

    adminResponse: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "ServiceRequest",
  serviceRequestSchema
);
