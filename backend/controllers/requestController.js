
const ServiceRequest = require("../models/ServiceRequest");

// CREATE REQUEST
const createRequest = async (req, res) => {
  try {
    const { title, description, category, priority } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({
        message: "Title, description and category are required"
      });
    }

    const request = await ServiceRequest.create({
      title,
      description,
      category,
      priority: priority || "Medium",
      createdBy: req.user.id
    });

    res.status(201).json({
      message: "Service request created successfully",
      request
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to create request",
      error: error.message
    });
  }
};


// GET REQUESTS
const getRequests = async (req, res) => {
  try {
    let filter = {};

    if (req.user.role === "student") {
      filter.createdBy = req.user.id;
    } else {
      if (req.query.status) filter.status = req.query.status;
      if (req.query.priority) filter.priority = req.query.priority;
      if (req.query.category) filter.category = req.query.category;
    }

    const requests = await ServiceRequest.find(filter)
      .populate("createdBy", "name email department")
      .populate("assignedTo", "name email");

    res.status(200).json({
      count: requests.length,
      requests
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch requests",
      error: error.message
    });
  }
};


// GET SINGLE REQUEST
const getRequestById = async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id)
      .populate("createdBy", "name email department")
      .populate("assignedTo", "name email");

    if (!request) {
      return res.status(404).json({
        message: "Request not found"
      });
    }

    if (
      req.user.role === "student" &&
      request.createdBy._id.toString() !== req.user.id
    ) {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    res.status(200).json(request);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch request",
      error: error.message
    });
  }
};


// UPDATE REQUEST
const updateRequest = async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        message: "Request not found"
      });
    }

    if (request.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You cannot update another user's request"
      });
    }

    if (request.status !== "Pending") {
      return res.status(400).json({
        message: "Only Pending requests can be updated"
      });
    }

    const { title, description, category, priority } = req.body;

    if (title !== undefined) request.title = title;
    if (description !== undefined) request.description = description;
    if (category !== undefined) request.category = category;
    if (priority !== undefined) request.priority = priority;

    await request.save();

    res.status(200).json({
      message: "Request updated successfully",
      request
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to update request",
      error: error.message
    });
  }
};


// DELETE REQUEST
const deleteRequest = async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        message: "Request not found"
      });
    }

    if (request.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You cannot delete another user's request"
      });
    }

    if (request.status !== "Pending") {
      return res.status(400).json({
        message: "Only Pending requests can be deleted"
      });
    }

    await request.deleteOne();

    res.status(200).json({
      message: "Request deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to delete request",
      error: error.message
    });
  }
};

module.exports = {
  createRequest,
  getRequests,
  getRequestById,
  updateRequest,
  deleteRequest
};
