function InfoToolTip({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__message">
        <button
          type="button"
          className="popup__close-btn"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">Registration successfully completed!</h2>
        <p className="popup__switch">
          <a className="popup__signin-link" href="">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default InfoToolTip;
