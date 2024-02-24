import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col  md:flex-row md:items-cente gap-5r">
        {/* left side  */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Sahand's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email address and
            password or with Google.
          </p>
        </div>

        {/* right side  */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Email" />
              <TextInput placeholder="Your Email" id="email" />
            </div>

            <div>
              <Label value="Password" />
              <TextInput placeholder="Your Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sing Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Dont have an account? </span>
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
