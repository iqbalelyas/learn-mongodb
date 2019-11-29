var express = require("express");
var router = express.Router();

const {
  addUser,
  getUserById,
  getUser,
  deleteUser,
  updateUser
} = require("../user/controllers");

/* GET users listing. */
router.get("/", getUser);
router.post("/", addUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
