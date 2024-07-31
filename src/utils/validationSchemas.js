import { body } from "express-validator";

export const createUserValidationSchema = {
  username: {
    isLength: {
      options: {
        min: 3,
        max: 20,
      },
      errorMessage: "must be atleast 3-20 chars",
    },
    notEmpty: {
      errorMessage: "username must not be empty",
    },
    isString: {
      errorMessage: "must be a string",
    },
  },
  password: {
    notEmpty: true,
    isLength: {
      options: {
        min: 5,
      },
      errorMessage: "must be atleast 5 chars",
    },
  },
  displayname: {
    notEmpty: {
      errorMessage: "displayname must not be empty",
    },
    isLength: {
      options: {
        min: 3,
      },
      errorMessage: "must be atleast 3 chars",
    },
  },
};
/*
export const editUserValidationSchema = {
  username: {
    isLength: {
      options: {
        max: 20,
      },
      errorMessage: "must be atleast 3-10 chars",
    },
  },
};
*/

export const createTaskValidationSchema = {
  title: {
    notEmpty: {
      errorMessage: "title must not be empty",
    },
    isString: {
      errorMessage: "must be a string",
    },
  },
  isImportant: {
    isBoolean: {
      errorMessage: "must be boolean",
    },
  },
  isCompleted: {
    isBoolean: {
      errorMessage: "must be boolean",
    },
  },
  body: {
    isString: {
      errorMessage: "body must be a string",
    },
  },
};
