import React, { useState, useEffect } from "react";

function AddKeyword({ renderElement }) {
  return (
    <div className="col-span-2">
      <div className="flex items-end justify-between">
        <div className="w-5/12 mr-2">
          <label className="block text-sm font-bold mb-2">Keyword</label>
          <select className="w-full p-2 rounded-md">
            <option>Select Keyword</option>
            <option>Keyword 1</option>
            <option>Keyword 2</option>
            <option>Keyword 3</option>
            <option>Keyword 4</option>
            <option>Keyword 5</option>
          </select>
        </div>
        <div className="w-5/12 ml-2">
          <label className="block text-sm font-bold mb-2">Weight</label>
          <select className="w-full p-2 rounded-md">
            <option>Select Weight</option>
            <option>Weight 1</option>
            <option>Weight 2</option>
            <option>Weight 3</option>
            <option>Weight 4</option>
            <option>Weight 5</option>
          </select>
        </div>
        <div className="w-2/12 ml-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={renderElement}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

function AddJob({ userInfo }) {
  const [user, setUser] = useState({ ...userInfo });

  const [element, setElement] = useState("");
  const renderElement = () => {
    setElement((prev) => {
      return (
        <>
          {prev}
          <AddKeyword renderElement={renderElement} />
        </>
      );
    });
  };

  useEffect(() => {
    if (userInfo.info) {
      setUser({
        ...userInfo,
      });
    }
  }, [userInfo]);

  return (
    <div className="m-2 relative">
      <h2 className="text-xl mb-4">
        <span className="font-bold">{user.info.company_name}</span>
        {` - `}
        <span className="font-bold">Add New Job</span>
      </h2>
      <hr />
      <form className="my-4">
        <div className="grid grid-cols-2 gap-4" id="formAdd">
          <div className="col-span-1">
            <label className="block text-sm font-bold mb-2">Job Title</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Job Title"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-bold mb-2">Job Require</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Job Require"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-bold mb-2">
              Job Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Job Description"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-bold mb-2">Job Benefit</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Job Benefit"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-bold mb-2">Job Place</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Job Place"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-bold mb-2">Job Salary</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Job Salary"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-bold mb-2">Date Expire</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
            />
          </div>
          <div className="col-span-2">
            <div className="flex items-end justify-between">
              <div className="w-5/12 mr-2">
                <label className="block text-sm font-bold mb-2">Keyword</label>
                <select className="w-full p-2 rounded-md">
                  <option>Select Keyword</option>
                  <option>Keyword 1</option>
                  <option>Keyword 2</option>
                  <option>Keyword 3</option>
                  <option>Keyword 4</option>
                  <option>Keyword 5</option>
                </select>
              </div>
              <div className="w-5/12 ml-2">
                <label className="block text-sm font-bold mb-2">Weight</label>
                <select className="w-full p-2 rounded-md">
                  <option>Select Weight</option>
                  <option>Weight 1</option>
                  <option>Weight 2</option>
                  <option>Weight 3</option>
                  <option>Weight 4</option>
                  <option>Weight 5</option>
                </select>
              </div>
              <div className="w-2/12 ml-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={renderElement}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          {element}
        </div>
      </form>
    </div>
  );
}

export default AddJob;
