import React from "react";
import PopupWithForm from "./PopupWithForm";

function SignUpPopup({ isOpen, onClose, handleSubmit, openSignIn, message }) {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(email, password, username);
  }


  return (
    <PopupWithForm
      title="Sign Up"
      formName="signUp"
      isOpen={isOpen}
      submitText="Sign Up"
      onSubmit={onSubmit}
      onClose={onClose}
      altOption="sign in"
      handleAlt={openSignIn}
    >
      <label htmlFor="emailsignup" className="popup__input-label">
        Email
      </label>
      <input
        className="popup__input popup__input_info_email"
        type="email"
        placeholder="Enter email"
        name="email"
        id="emailsignup"
        minLength="2"
        maxLength="40"
        onChange={handleEmailChange}
        required
      />
      <p className="popup__input-error">Invalid email address</p>
      <label htmlFor="passwordsignup" className="popup__input-label">
        Password
      </label>
      <input
        className="popup__input popup__input_info_password"
        type="password"
        placeholder="Enter password"
        name="password"
        id="passwordsignup"
        minLength="2"
        maxLength="40"
        onChange={handlePasswordChange}
        required
      />
      <p className="popup__input-error">Invalid password</p>
      <label htmlFor="username" className="popup__input-label">
        Username
      </label>
      <input
        className="popup__input popup__input_info_username"
        type="text"
        placeholder="Enter your username"
        name="username"
        id="username"
        minLength="2"
        maxLength="40"
        onChange={handleUserNameChange}
        required
      />
      {message && <p className="popup__submit-error">{message}</p>}
    </PopupWithForm>
  );
}

export default SignUpPopup;
