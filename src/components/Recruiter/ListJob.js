import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

function ListJob() {
  const [cookies] = useCookies(["user"]);
  const [job, setJob] = useState({
    company_name: "",
    listJob: [],
  });

  const [page, setPage] = useState({
    min: 1,
    limit: 9,
    max: 9,
    current: 1,
  });

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/recruiter/apply?api_token=${cookies.user}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setJob({
            company_name: data.company_name,
            listJob: data.data,
          });
        }
      })
      .catch((err) => console.log(err));
  }, [cookies.user]);

  const prevPage = () => {
    if (page.current > 1) {
      setPage({
        ...page,
        min: page.min - page.limit,
        max: page.max - page.limit,
        current: page.current - 1,
      });
    }
  };

  const nextPage = () => {
    let maxPage = Math.ceil(job.listJob.length / page.limit);
    if (page.current < maxPage) {
      setPage({
        ...page,
        min: page.min + page.limit,
        max: page.max + page.limit,
        current: page.current + 1,
      });
    }
  };

  return (
    <div className="m-2 relative">
      <h2 className="text-xl mb-4">
        <span className="font-bold">
          {job.company_name ? job.company_name : "Loading..."}
        </span>
        {` - `}
        <span className="font-bold">List Job</span>
      </h2>
      <hr />
      <div className="grid grid-cols-3 gap-4 my-4">
        {job.listJob && job.listJob.length > 0 ? (
          job.listJob.map(
            (item, index) =>
              index >= page.min &&
              index <= page.max && (
                <div key={index} className="col-span-1 relative">
                  <div className="flex flex-col justify-between bg-white shadow-md rounded-lg p-4 h-full">
                    <div className="flex justify-between">
                      <div className="flex">
                        <h3 className="text-lg font-bold">
                          {item.job_title.length > 20
                            ? item.job_title.slice(0, 20) + "..."
                            : item.job_title}
                        </h3>
                      </div>
                      <div className="text-sm text-gray-600">
                        {new Date(item.created_at).toLocaleDateString("vi-VN")}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-sm text-gray-600">
                          {item.job_place}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span className="text-sm text-gray-600">
                          {item.salary}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )
        ) : (
          <div className="col-span-1">
            <div className="bg-white shadow-md rounded p-4">
              <div className="flex justify-between">
                <div className="flex">
                  <h3 className="text-lg font-bold">No Job</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={prevPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <span>
          {page.current} of {Math.ceil(job.listJob.length / page.limit)}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ListJob;
