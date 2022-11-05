import css from "../Styles/form.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Email Sent Successfully!");
        },
        (error) => {
          // console.log(error.text);
          toast.error("Failed to Send Email");
        }
      );
  };

  return (
    <div className={css.form}>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <h2>Contact Me</h2>
      <h3>Get in touch</h3>
      <form ref={form} onSubmit={sendEmail}>
        <input placeholder="Email" type="email" name="user_email" required />
        <input placeholder="Subject" type="text" name="user_subject" required />
        <textarea placeholder="Message" name="message" required />
        <button> Send</button>
      </form>
    </div>
  );
};

export default Form;
