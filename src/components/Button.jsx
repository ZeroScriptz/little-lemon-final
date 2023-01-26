import React from "react";
export default function Button({ onClick, type, children, testId }) {
  return (
    <>
      <button
        className="booking-btn"
        type={type}
        onClick={onClick}
        data-testid={testId}
      >
        {children}
      </button>
    </>
  );
}
