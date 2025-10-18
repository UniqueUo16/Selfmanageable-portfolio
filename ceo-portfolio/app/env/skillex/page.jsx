"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Skillex() {
  const router = useRouter();
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});

  // Fetch data
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get("http://localhost:8000/skillex");
        setSkillsData(res.data);
        setFormData(res.data); // populate form for editing
        setLoading(false);
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };
    fetchSkills();
  }, []);

  if (loading) return <p>Loading...</p>;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update skills
  const handleUpdate = async () => {
    try {
      const res = await axios.post("http://localhost:8000/skillex", formData);
      setSkillsData(res.data);
      setEditing(false);
      alert("Updated✅")
      setTimeout(() => router.push("/udashboard"), 1500);
    } catch (err) {
      console.error("Error updating skills:", err);
    }
  };

  // Delete skills
  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:8000/skillex");
      setSkillsData(null);
      setFormData({});
    } catch (err) {
      console.error("Error deleting skills:", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Skills CRUD</h2>

      {editing ? (
        <div className="space-y-2">
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label className="block font-semibold">{key}</label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="border p-1 w-full"
              />
            </div>
          ))}
          <button
            onClick={handleUpdate}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            Save
          </button>
          <button
            onClick={() => setEditing(false)}
            className="mt-2 ml-2 px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          {skillsData ? (
            <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(skillsData, null, 2)}</pre>
          ) : (
            <p>No skills data available</p>
          )}
          <button
            onClick={() => setEditing(true)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="mt-2 ml-2 px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
