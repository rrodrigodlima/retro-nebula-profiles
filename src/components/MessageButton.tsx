import "./MessageButton.css";

export const MessageButton = () => {
  const label = "message";
  return (
    <div className="msg-btn-wrapper">
      <button className="msg-btn" type="button">
        {/* floating points (from ilkhoeri) */}
        <span className="points_wrapper" aria-hidden>
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="point" />
          ))}
        </span>

        {/* sparkle icon */}
        <svg
          className="msg-btn-svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l1.8 5.5L19 9l-5.2 1.5L12 16l-1.8-5.5L5 9l5.2-1.5L12 2zm7 11l.9 2.6L22 17l-2.1.4L19 20l-.9-2.6L16 17l2.1-.4L19 13zM5 14l.7 2L7 16.6 5.7 17 5 19l-.7-2L3 16.6 4.3 16 5 14z" />
        </svg>

        <span className="txt-wrapper">
          {label.split("").map((ch, i) => (
            <span key={i} className="msg-btn-letter">
              {ch}
            </span>
          ))}
        </span>
      </button>
    </div>
  );
};

export default MessageButton;
