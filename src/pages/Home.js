import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

function Home() {
  const [listCandidate, setListCandidate] = useState([]);

  const [cookies] = useCookies(["user"]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/candidate/job?api_token=${cookies.user}`
    )
      .then((response) => response.json())
      .then((data) => setListCandidate(data.data))
      .catch((err) => console.log(err));
  }, [cookies.user]);

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
          {listCandidate.map((item, index) => (
            <Link
              to={`/job-detail/${item.id}`}
              className="col-span-1"
              key={index}
            >
              <div className="flex flex-col items-center">
                <div className="flex-1">
                  <img
                    src={item.logo_url}
                    alt={item.job_title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{item.job_title}</h3>
                  <p className="text-sm">{item.company_name}</p>
                  <p className="text-sm">{item.job_place}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm">{item.salary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
