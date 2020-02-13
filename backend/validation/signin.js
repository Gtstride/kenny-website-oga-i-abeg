// const Validator = require('validator');
// const isEmpty = require("./is-empty");
import Validator from "validator";
import isEmpty from "./is-empty";

module.exports = function validateUserSignInInput(data) {
  const errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email Field cannot be empty";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Field can not be empty";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
