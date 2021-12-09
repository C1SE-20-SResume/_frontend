import React, { useState } from "react";

function VerifyNotice() {
  const [number, setNumber] = useState(3);
  // redirect to home page after 3 seconds
  const countDown = setInterval(() => {
    setNumber((prev) => prev - 1);
  }, 1000);

  // redirect to login page after 3 seconds
  if (number === 0) {
    clearInterval(countDown);
    window.location.href = "/login";
  }

  return (
    <div>
      <h1>Success</h1>
      <p>
        You have successfully verified your account. You will be redirected to
        the home page in {number} seconds.
      </p>
    </div>
  );
}

export default VerifyNotice;
