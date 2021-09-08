import React from "react";
import SimpleForm from "./SimpleForm";
import ModalForm from "./ModalForm";
import ValidationForm from "./ValidationForm";

const ReduxForm = () => {
  return (
    <div>
      {/* Read documentation for react-redux-form */}
      <h1>React Redux Form</h1>

      <h3>Simple React Redux Form</h3>
      <SimpleForm />
      <br />
      <br />

      <h3>Redux Form with Validation</h3>
      <ValidationForm />
      <br />
      <br />

      <h3>Redux Form with Modal</h3>
      <ModalForm />
      <br />
      <br />
    </div>
  );
};

export default ReduxForm;
