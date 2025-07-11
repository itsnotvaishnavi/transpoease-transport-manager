import React, { useEffect, useState } from "react";

const ComplaintForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone_number: "",
    subject: "",
    complaint_details: "",
  });
  const [complaints, setComplaints] = useState([]);

  // Fetch all complaints from backend
  const fetchComplaints = async () => {
    const res = await fetch("http://localhost:5000/api/complaints");
    setComplaints(await res.json());
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/complaints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ name: "", phone_number: "", subject: "", complaint_details: "" });
    fetchComplaints();
  };

  return (
    <div className="container mx-auto max-w-md py-8">
      <h1 className="text-3xl font-bold mb-4">Submit a Complaint</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <input
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <textarea
          name="complaint_details"
          placeholder="Complaint Details"
          value={form.complaint_details}
          onChange={handleChange}
          className="w-full p-2 border"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Submit Complaint
        </button>
      </form>
      <h2 className="text-2xl font-bold mt-8 mb-2">All Complaints</h2>
      <ul>
        {complaints.map((c: any) => (
          <li key={c.id} className="border-b py-2">
            <strong>{c.subject}</strong> by {c.name} ({c.phone_number}):<br />
            {c.complaint_details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComplaintForm;