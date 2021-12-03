import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

function JobDetail() {
  const { id } = useParams();
  const [cookies] = useCookies(["user"]);

  const [job, setJob] = useState({});

  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/job/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setJob(data.data);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleUploadCV = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    const formData = new FormData();
    formData.append("cv_file", e.target.files[0]);
    formData.append("job_id", id);

    fetch(
      `${process.env.REACT_APP_API_URL}/candidate/job/upload?api_token=${cookies.user}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          //  disable button

          setShow(false);
          alert("Upload CV Success");
        } else {
          alert(data.message);
          window.location.reload();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <main>
      <section className="py-10">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-2xl mb-4 font-bold">Job Detail</h2>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers.
            </p>
          </div>
          <div className="flex">
            <div className="md:w-3/4 w-full mr-5">
              <div className="shadow-md bg-gray-50 p-5">
                <div className="flex">
                  <div>
                    <img
                      src={job.logo_url}
                      alt={job.company_name}
                      className="max-w-[90px] h-auto"
                    />
                  </div>
                  <div className="ml-5">
                    <h3 className="capitalize text-lg">{job.job_title}</h3>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <span>{job.company_name}</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
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
                      <span>{job.job_place}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="mb-4">
                    <h4>
                      <span className="font-bold">Job Description</span>
                    </h4>
                    <p>{job.job_descrip}</p>
                  </div>
                  <div className="mb-4">
                    <h4>
                      <span className="font-bold">Job Benefit</span>
                    </h4>
                    <p>{job.job_benefit}</p>
                  </div>
                  <div className="mb-4">
                    <h4>
                      <span className="font-bold">Job Require </span>
                    </h4>
                    <p>{job.job_require}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 w-full">
              <div className="shadow-md bg-gray-100 p-5 mb-6">
                <h3 className="text-center">
                  <span className="font-bold">Job Detail</span>
                </h3>
                <div className="mt-4">
                  <div className="flex items-center my-3">
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
                    <span className="flex-grow text-center">{job.salary}$</span>
                  </div>
                  <div className="flex items-center my-3">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="flex-grow text-center">Full Time</span>
                  </div>
                  <div className="flex items-center my-3">
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                    <span className="flex-grow text-center">
                      {Math.floor(
                        (new Date() - new Date(job.updated_at)) /
                          (1000 * 60 * 60 * 24)
                      ) +
                        1 +
                        " days ago"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="shadow-md bg-gray-100 p-5">
                <button
                  className="w-full border border-blue-500 text-black hover:bg-blue-500 hover:text-white font-bold py-3 rounded transition-all duration-300"
                  onClick={() => setShow(true)}
                >
                  <span className="font-bold">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {show && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="z-20 bg-white rounded-lg shadow-xl p-5 min-w-[300px]">
            <h3 className="text-center">
              <span className="font-bold">Apply</span>
            </h3>
            <div className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Upload CV
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="file"
                  placeholder="Upload CV"
                  onChange={handleUploadCV}
                />
                <p>Or</p>
                <button className="w-full border border-blue-500 text-black hover:bg-blue-500 hover:text-white font-bold py-3 rounded transition-all duration-300">
                  <span className="font-bold">Use existing CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default JobDetail;
