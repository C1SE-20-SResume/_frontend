import React, { useState } from "react";
import { useCookies } from "react-cookie";
function Scan() {
  const [cookies, setCookie] = useCookies(["user"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // get the file
    const file = document.getElementById("file").files[0];
    const formData = new FormData();
    formData.append("cv_file", file);
    // random 1 - 5
    const random = Math.floor(Math.random() * 5) + 1;
    // job_id
    formData.append("job_id", random);
    fetch(
      `${process.env.REACT_APP_API_URL}/candidate/job/upload?api_token=${cookies.user}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        /*{
          success: true or false,
          cv_score: x/y,
          cv_pass: 1 or 0
        }*/
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
