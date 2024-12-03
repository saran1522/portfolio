import { useState } from "react";
import Heading from "./Heading";

function Contact() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9e997790-afb2-491f-bdc2-e6d602fd5bdf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="mt-14 text-xl">
      <Heading title="Contact Me" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-end gap-4 p-4"
      >
        <input
          className="w-[80%] rounded-xl border border-gray-300 bg-transparent p-4 dark:border-gray-700 dark:placeholder-slate-700"
          type="email"
          placeholder="email"
          name="email"
        />
        <textarea
          name="message"
          placeholder="your message..."
          id=""
          className="w-[80%] rounded-xl border border-gray-300 bg-transparent p-4 dark:border-gray-700 dark:placeholder-slate-700"
        ></textarea>
        <button className="w-[80%] rounded-lg bg-gray-900 p-4 text-center text-slate-400">
          Send Message
        </button>
      </form>
      <span className="m-auto block w-fit">{result}</span>
    </div>
  );
}

export default Contact;
