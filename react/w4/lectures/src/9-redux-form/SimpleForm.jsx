import React from "react";
import { LocalForm, Control } from "react-redux-form";

const SimpleForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  // where does the data get saved as you type it?
  return (
    <div>
      <LocalForm onSubmit={(values) => handleSubmit(values)}>
        {/* modal prop must be present or else you will get an error */}
        {/* modal prop must have a period at the beginning */}
        <Control.text model=".username" placeholder="username" />
        <Control.text model=".email" placeholder="email" />
        <Control.text model=".password" placeholder="password" />
        <button type="submit">Submit</button>
      </LocalForm>
    </div>
  );
};

export default SimpleForm;
