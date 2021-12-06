import React from "react";

function ProfileTab({ user }) {
  return (
    <div className="m-2">
      <h2 className="text-xl mb-4">
        <span className="font-bold">Profile</span>
      </h2>
      <hr />
      <form className="mb-5">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="col-span-1 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Your Name"
              name="fullname"
              defaultValue={user.info.full_name}
            />
          </div>
          <div className="col-span-1 2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              defaultValue={user.info.email}
              disabled
            />
          </div>
          <div className="col-span-1 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="phone_number"
              defaultValue={user.info.phone_number}
            />
          </div>
          <div className="col-span-1 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Birthday
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="birthday"
              defaultValue={user.info.date_birth}
            />
          </div>
          <div className="col-span-1 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <select className="w-full p-2 rounded-md ">
              <option value="f">Female</option>
              <option value="m">Male</option>
              <option value="o">Another</option>
            </select>
          </div>
        </div>
        <div className="text-center">
          <button className="py-2 px-4 bg-blue-500 border border-blue-500  hover:bg-white hover:text-blue-500 text-white font-bold rounded-lg">
            <span className="font-bold">Update</span>
          </button>
        </div>
      </form>

      {user.role === 0 && (
        <>
          <hr />
          <div className="mt-5">
            <h3 className="text-lg">
              <span className="font-bold">Table Score</span>
            </h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="pb-3">
                    <span className="font-bold">Type</span>
                  </th>
                  <th className="pb-3">
                    <span className="font-bold">Score</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border">
                  <td className="px-3 py-2">
                    <span className="font-bold">Aptitude Score</span>
                  </td>
                  <td className="text-center">
                    <span
                      className={`${
                        !user.info.apptitude_score && "text-red-500"
                      }`}
                    >
                      {user.info.apptitude_score
                        ? user.info.apptitude_score
                        : NaN}
                    </span>
                  </td>
                </tr>
                <tr className="border border-t-0">
                  <td className="px-3 py-2">
                    <span className="font-bold">Personality Score</span>
                  </td>
                  <td className="text-center">
                    <span
                      className={`${
                        !user.info.personality_score && "text-red-500"
                      }`}
                    >
                      {user.info.personality_score
                        ? user.info.personality_score
                        : NaN}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileTab;
