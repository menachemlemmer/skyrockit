const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applications");

router.get("/", applicationController.index);

router.get("/new", applicationController.new);

router.post("/", applicationController.create);

router.get("/:applicationId", applicationController.show);

module.exports = router;
