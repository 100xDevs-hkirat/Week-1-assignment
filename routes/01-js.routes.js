const express = require("express");
const router = express.Router();
const firstAssignmentController = require("../controllers/firstAssignment.controller");

router.get("/isAnagram", firstAssignmentController.isAnagram);
router.get(
  "/getExpenditureAnalysis",
  firstAssignmentController.getExpenditureAnalysis
);
router.get("/isPalindrome", firstAssignmentController.isPalindrome);
router.get("/times/:times", firstAssignmentController.calculateTimes);
router.post("/calculator", firstAssignmentController.calculator);
router.post("/todo/add", firstAssignmentController.addToList);
router.post("/todo/remove/:index", firstAssignmentController.removeFromList);
router.post("/todo/update/:index", firstAssignmentController.update);
router.get("/todo/getAll", firstAssignmentController.getAll);
router.get("/todo/get/:index", firstAssignmentController.get);
router.post("/todo/clear", firstAssignmentController.clear);

module.exports = router;
