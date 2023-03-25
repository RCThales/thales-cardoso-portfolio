import React, { useState, useRef, useContext } from "react";

import { ThemeContext } from "../../Context/theme.context";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
    const form = useRef(null);

  const { currentTheme } = useContext(ThemeContext);
  return (
    <form
      ref={form}
      onSubmit={undefined}
      id="contact"
      className="relative flex flex-col justify-center pb-40 items-center w-screen max-w-full transition-colors dark:bg-slate-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-screen top-0 translate-y-[-10px] rotate-180 pointer-events-none"
      >
        <path
          fill={currentTheme === "dark" ? "#1E293B" : "#f3f4f5"}
          className="transition-colors"
          fill-opacity="1"
          d="M0,32L1440,128L1440,320L0,320Z"
        ></path>
      </svg>
      <div></div>
      <h1 className="font-std text-5xl p-10 z-40 dark:text-white transition-colors">
        SEND ME A MESSAGE :)
      </h1>
      <div className="flex flex-col mb-4 w-[80%] max-w-[800px] z-40">
        <label
          className="block text-gray-700 transition-colors dark:text-white font-bold text-xl mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="appearance-none border rounded-lg py-2 px-3 transition-colors text-gray-700 dark:text-white dark:bg-slate-500 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-4 w-[80%] max-w-[800px] z-40">
        <label
          className="block text-gray-700 dark:text-white font-bold mb-2 text-xl"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="appearance-none border rounded-lg py-2 px-3 h-80 transition-colors text-gray-700 dark:text-white dark:bg-slate-500 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Enter your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 transition-colors text-white text-2xl font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          Send Email
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
