function InfoToolTip({ isOpen, onClose, openSignIn }) {
  return (
    <div className={`popup ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__message  popup__message_info-tooltip">
        <button
          type="button"
          className="popup__close-btn"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">Registration successfully completed!</h2>
        <p className="popup__switch">
          <button className="popup__signin-button" onClick={openSignIn}>
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

export default InfoToolTip;
