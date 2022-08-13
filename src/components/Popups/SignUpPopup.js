import React from "react";
import PopupWithForm from "./PopupWithForm";

function SignUpPopup({ isOpen, onClose, handleSubmit }) {
  return (
    <PopupWithForm
      title="Sign Up"
      formName="signUp"
      isOpen={isOpen}
      submitText="Sign Up"
      onSubmit={handleSubmit}
      onClose={onClose}
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
        required
      />
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
        required
      />
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
        required
      />
      <p className="popup__input-error">This email is not available</p>
    </PopupWithForm>
  );
}

export default SignUpPopup;
