import React, { useState } from "react";
import Links from "./Links";

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="max-w-[1240px] m-auto p-6 py-10">
      <h1 className="text-4xl font-bold shadow-gray-400 text-center p-6 text-white">
        Talk me
      </h1>
      <form className="max-w-[600px] m-auto">
        <label className="text-1xl font-bold text-white">Email</label>
        <div className="grid gri-clos-2 gap4 mt-4">
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="email"
            onChange={handleChange}
            required
            className="border shadow-lg shadow-blue-400 p-6"
          />
        </div>
        <label className="text-1xl font-bold text-white">Password</label>
        <div>
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="password"
            onChange={handleChange}
            required
            className="border shadow-lg shadow-blue-400 p-6"
          />
        </div>
        <label className="text-1xl font-bold text-white">Message</label>
        <textarea
          name="message"
          value={form.message}
          required
          cols="30"
          rows="10"
          onChange={handleChange}
          placeholder="message"
          className="border shadow-lg shadow-blue-400 p-6 w-full mt-4"
        />
        <button
          className="border shadow-lg shadow-purple-400 p-8 w-full mt-4 w-full font-semibold text-white"
          type="submit"
        >
          submit
        </button>
        <div>
          <Links />
        </div>
      </form>
    </div>
  );
};

export default Contact;
