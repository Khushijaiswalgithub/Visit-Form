import React, { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({ name: "", mobile: "", purpose: "", area: "", district: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://vercel.com/khus-projects-eb41d056/visit-form/64wCtfQ1A4RREfV7V1rpmqwT8KGG/api/submit", form)
      .then(() => {
        setForm({ name: "", mobile: "", purpose: "", area: "", district: "" });
        setSubmitted(true);
        setError(null);
      })
      .catch(() => {
        setError("Submission failed! Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-10 border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-600 rounded-full p-3 mb-3 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 0V7m0 4v4m0 0c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" /></svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">Visiting Form</h2>
          <p className="text-gray-500 text-center text-lg">Please fill out the details below to register your visit.</p>
        </div>
        {submitted ? (
          <div className="text-green-600 text-center text-xl font-semibold py-12">Thank you for your submission!</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name <span className="text-red-500">*</span></label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Mobile No. <span className="text-red-500">*</span></label>
                <input name="mobile" value={form.mobile} onChange={handleChange} required className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition" placeholder="Enter your mobile number" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Purpose <span className="text-red-500">*</span></label>
                <input name="purpose" value={form.purpose} onChange={handleChange} required className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition" placeholder="Purpose of visit" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Area <span className="text-red-500">*</span></label>
                <input name="area" value={form.area} onChange={handleChange} required className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition" placeholder="Enter your area" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">District <span className="text-red-500">*</span></label>
                <input name="district" value={form.district} onChange={handleChange} required className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 transition" placeholder="Enter your district" />
              </div>
            </div>
            {error && <div className="text-red-500 text-center font-medium">{error}</div>}
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold text-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
