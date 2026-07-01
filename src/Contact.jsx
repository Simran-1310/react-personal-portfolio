import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mpqjnwej");

  if (state.succeeded) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <h2 className="text-3xl font-bold text-green-600">
           Message Sent!
        </h2>
        <p className="mt-4 text-gray-600">
          Thank you for contacting me. I'll get back to you soon.
        </p>
      </div>
    </div>
  );
}

  return (
  <div className="min-h-screen flex items-center justify-center px-6 py-12">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-4xl font-bold text-center mb-2">
        Contact Me
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Feel free to reach out. I'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-gray-700 font-semibold"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />

          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-gray-700 font-semibold"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-gray-700 font-semibold"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
          ></textarea>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  </div>
);
}

export default Contact;