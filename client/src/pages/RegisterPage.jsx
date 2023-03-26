import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { registerUserAction } from "../actions/userActions";

function RegisterPage() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const dispatch = useDispatch();

  const userState = useSelector((state) => state.registerUserReducer);
  const { success, loading, users, error } = userState;

  const registerHandler = () => {
    if (name === "" || mail === "" || pass === "" || confirmPass === "") {
      Swal.fire("Eksik alanları doldurunuz.!");
    } else if (pass !== confirmPass) {
      Swal.fire("Şifreler uyuşmamaktadır!");
    } else {
      const user = {
        name: name,
        mail: mail,
        password: pass,
      };
      console.log(user);
      dispatch(registerUserAction(user));
    }
  };
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-neutral-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-neutral-100 text-neutral-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="w-full md:w-full py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-neutral-900">
                  REGISTER
                </h1>
                <p>Enter your information to register</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Name</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <UserIcon className="text-neutral-400 w-5" />
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-neutral-200 outline-none focus:border-indigo-500"
                        placeholder="John Doe"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <EnvelopeIcon className="text-neutral-400 w-5" />
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-neutral-200 outline-none focus:border-indigo-500"
                        placeholder="johndoe@gmail.com"
                        onChange={(e) => setMail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <LockClosedIcon className="text-neutral-400 w-5" />
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-neutral-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                        onChange={(e) => setPass(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 mb-12">
                    <label className="text-xs font-semibold px-1">
                      Re-enter Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <LockClosedIcon className="text-neutral-400 w-5" />
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-neutral-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                        onChange={(e) => setConfirmPass(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      className="block w-full max-w-xs mx-auto bg-neutral-800 hover:bg-neutral-900 focus:bg-neutral-700 text-white rounded-lg px-3 py-3 font-semibold"
                      onClick={registerHandler}
                    >
                      REGISTER NOW
                    </button>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5 flex justify-center gap-4 text-sm">
                    <span>Don't have an account?</span>
                    <Link
                      to="/register"
                      className="text-indigo-500 font-semibold hover:text-indigo-600 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
