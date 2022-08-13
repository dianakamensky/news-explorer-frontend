import React from "react";
import PopupWithForm from "./PopupWithForm";

function SignInPopup({ isOpen, onClose, handleSubmit }) {
  return (
    <PopupWithForm
      title="Sign in"
      formName="signIn"
      isOpen={isOpen}
      submitText="Sign In"
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
      <p className="popup__input-error">Invalid email address</p>
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
    </PopupWithForm>
  );
}

export default SignInPopup;
