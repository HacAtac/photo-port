import React, { useState } from "react";

function ContactForm() {
  const [formState, setFormState] = useState({
    //what is formState? // it holds the state of the form.// what is setFormState? // it is the function that updates the state of the form.
    //this will be the state of the form
    // and it will be updated as the user interacts with the form fields and the form is submitted
    // this is known as the "controlled component" pattern in react
    // the form will be controlled by the state of the form
    // which in easier terms: means that the form will be controlled by the state of the form
    name: "", //this sets an empty string as the default value for the name field in the form so it can be updated by the user
    email: "",
    message: "",
  });

  const { name, email, message } = formState; //this line of code is known as destructuring the formState object and assigning the values to the variables name, email, and message
  // were using it here to make the code more readable and easier to understand so we can use the variables in the form fields

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value }); //this is the same as formState.name = e.target.value;
  }
  //   console.log(formState);
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            defaultValue={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            defaultValue={email}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            onChange={handleChange}
            defaultVale={message}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactForm;
