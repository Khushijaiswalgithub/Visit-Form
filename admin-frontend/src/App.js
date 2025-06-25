import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://vercel.com/khus-projects-eb41d056/visit-form/64wCtfQ1A4RREfV7V1rpmqwT8KGG/api/submissions")
      .then(res => {
        setSubmissions(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch submissions");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-4">{error}</div>
        ) : (
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Mobile</th>
                <th className="border px-2 py-1">Purpose</th>
                <th className="border px-2 py-1">Area</th>
                <th className="border px-2 py-1">District</th>
              </tr>
            </thead>
            <tbody>
              {submissions.length === 0 ? (
                <tr><td colSpan="5" className="text-center py-4">No submissions yet.</td></tr>
              ) : (
                submissions.map((s, i) => (
                  <tr key={i}>
                    <td className="border px-2 py-1">{s.name}</td>
                    <td className="border px-2 py-1">{s.mobile}</td>
                    <td className="border px-2 py-1">{s.purpose}</td>
                    <td className="border px-2 py-1">{s.area}</td>
                    <td className="border px-2 py-1">{s.district}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
