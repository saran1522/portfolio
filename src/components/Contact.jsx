import React from "react";

function Contact() {
  return (
    <div className="mt-14 text-xl text-[#2b2b2d] dark:text-white">
      <h3 className="text-center text-5xl font-normal leading-relaxed dark:text-gray-300">
        Contact Me
      </h3>
      <form
        action=""
        className="flex flex-col items-center justify-end gap-4 p-4"
      >
        <input
          className="w-[80%] rounded-lg border border-gray-300 bg-transparent p-4 dark:border-gray-500"
          type="email"
          placeholder="email"
          name="email"
        />
        <textarea
          name="message"
          placeholder="your message..."
          id=""
          className="w-[80%] rounded-lg border border-gray-300 bg-transparent p-4 dark:border-gray-500"
        ></textarea>
        <a
          href="#"
          className="w-[80%] rounded-lg bg-gray-500 p-4 text-center text-white"
        >
          Send Message
        </a>
      </form>
    </div>
  );
}

export default Contact;
