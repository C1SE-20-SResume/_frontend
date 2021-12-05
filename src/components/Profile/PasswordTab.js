import React from "react";

function PasswordTab({ user }) {
  return (
    <div className="m-2">
      <h2 className="text-xl mb-4">
        <span className="font-bold">Change Password</span>
      </h2>
      <hr />
      <div>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="col-span-1 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Current Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="currentPassword"
                placeholder="Current Password"
              />
            </div>
            <div className="col-span-1 mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                New Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="newPassword"
                placeholder="New Password"
              />
            </div>
          </div>
          <div className="text-center">
            <button className="py-2 px-4 bg-blue-500 border border-blue-500  hover:bg-white hover:text-blue-500 text-white font-bold rounded-lg">
              <span className="font-bold">Change Password</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordTab;
