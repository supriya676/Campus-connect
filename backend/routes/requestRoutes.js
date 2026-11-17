
const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createRequest,
  getRequests,
  getRequestById,
  updateRequest,
  deleteRequest
} = require("../controllers/requestController");

router.post("/", protect, createRequest);
router.get("/", protect, getRequests);
router.get("/:id", protect, getRequestById);
router.put("/:id", protect, updateRequest);
router.delete("/:id", protect, deleteRequest);

module.exports = router;
