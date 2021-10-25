import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

function JobDetail() {
  const { id } = useParams();
  const [cookies] = useCookies(["user"]);
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/candidate/job/${id}?api_token=${cookies.user}`
    )
      .then((res) => res.json())
      .then((data) => setJob(data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(job);
  return (
    <div>
      <h1>{job.company_name}</h1>
    </div>
  );
}

export default JobDetail;
