import React from "react";
import { LocalForm, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const minLength = (val) => val && val.length >= 2;
const print = (val) => {
  console.log(val);
  return true;
};
const validatePassword = (val) => {
  let passwordRegex = /^\w{2,6}$/;
  return passwordRegex.test(val);
};

const ValidationForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <LocalForm onSubmit={(values) => handleSubmit(values)}>
        <div>
          <Control.text
            model=".email"
            placeholder="Email"
            validators={{
              required: required,
              minLength: minLength,
              print: print,
              validatePassword: validatePassword,
            }}
          />
          <Errors
            model=".email"
            show="touched"
            component="div"
            messages={{
              required: "Required",
              minLength: "Must be at least 2 characters",
              validatePassword: "Must be between 2-6 characters",
            }}
            className="text-danger"
          />
        </div>
        <button type="submit">Submit</button>
      </LocalForm>
    </div>
  );
};

export default ValidationForm;
