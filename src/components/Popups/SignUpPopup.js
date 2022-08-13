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
      <label for="email" className="popup__input-label">
        Email
      </label>
      <input
        className="popup__input popup__input_info_email"
        type="email"
        value={""}
        placeholder="Enter email"
        name="email"
        id="email"
        minLength="2"
        maxLength="40"
        required
      />
      <label for="password" className="popup__input-label">
        Password
      </label>
      <input
        className="popup__input popup__input_info_password"
        type="text"
        value={""}
        placeholder="Enter password"
        name="password"
        id="password"
        minLength="2"
        maxLength="40"
        required
      />
      <label for="username" className="popup__input-label">
        Username
      </label>
      <input
        className="popup__input popup__input_info_username"
        type="text"
        value={""}
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
