import React from "react";
import PopupWithForm from "./PopupWithForm";

function SignInPopup({ isOpen, onClose, handleSubmit, openSignUp }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(email, password);
  }

  return (
    <PopupWithForm
      title="Sign in"
      formName="signIn"
      isOpen={isOpen}
      submitText="Sign In"
      onSubmit={onSubmit}
      onClose={onClose}
      altOption="Sign up"
      handleAlt={openSignUp}
    >
      <label htmlFor="email" className="popup__input-label">
        Email
      </label>
      <input
        className="popup__input popup__input_info_email"
        type="email"
        placeholder="Enter email"
        name="email"
        id="email"
        minLength="2"
        maxLength="40"
        onChange={handleEmailChange}
        value={email}
        required
      />
      <p className="popup__input-error">Invalid email address</p>
      <label htmlFor="password" className="popup__input-label">
        Password
      </label>
      <input
        className="popup__input popup__input_info_password"
        type="password"
        placeholder="Enter password"
        name="password"
        id="password"
        minLength="2"
        maxLength="40"
        onChange={handlePasswordChange}
        value={password}
        required
      />
    </PopupWithForm>
  );
}

export default SignInPopup;
