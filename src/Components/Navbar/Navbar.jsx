import React from "react";
import { TbSearch } from "react-icons/tb";

const Navbar = () => {
  const user = false;

  return (
    <div>
      <div className="navbar flex justify-between w-full border bg-[#FFFFFF] px-16">
        <div>
          <div className="normal-case text-2xl items-center justify-center flex gap-2">
            <span className="text-[#27A365]">ATG</span>
            <span className="flex items-baseline text-[#5C5D5D]">
              W
              <img
                className="h-[18px]"
                src="https://i.ibb.co/Ks5YqC2/Union-1.png"
              />
              RLD
            </span>
          </div>
        </div>
        <div>
          <div className="form-control relative">
            <input
              type="text"
              placeholder="Search for your favorite groups in ATG"
              className="input font-semibold text-[#5C5C5C] bg-[#F2F2F2] input-bordered w-24 md:w-[360px] rounded-3xl md:h-[42px] pr-10 pl-10"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <TbSearch />
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          {user ? (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
            </>
          ) : (
            <>
              <div className="flex gap-2">
                <p className="font-semibold">Create account.</p>
                <p className="text-[#2F6CE5] font-bold">It`s free!</p>
              </div>
            </>
          )}
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
