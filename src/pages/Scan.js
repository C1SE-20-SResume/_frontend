import React, { useState } from "react";
import { useCookies } from "react-cookie";
function Scan() {
  const [pdf, setPdf] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // get the file
    const file = document.getElementById("file").files[0];
    const formData = new FormData();
    formData.append("file", file);
    fetch(`${process.env.REACT_APP_API_URL}/scan`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" id="file" />
        <button>Upload</button>
      </form>
    </div>
  );
}

export default Scan;
