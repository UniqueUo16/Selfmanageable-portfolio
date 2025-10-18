"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Aboutex() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [aboutex, setAboutex] = useState({ title: "", description: "" });

  // Fetch existing data
  useEffect(() => {
    const fetchAboutex = async () => {
      try {
        const res = await axios.get("http://localhost:5000/aboutex");
        setAboutex(res.data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAboutex();
  }, []);

  // Handle input changes
  const handleChange = (field, value) => {
    setAboutex((prev) => ({ ...prev, [field]: value }));
  };

  // Save to backend
  const handleSave = async () => {
    setSaving(true);
    try {
      await axios.post("http://localhost:5000/aboutex", aboutex);
      alert("✅ About updated successfully");
      setTimeout(() => router.push("/udashboard"), 1500);
    } catch (err) {
      console.error("Save error:", err);
      alert("❌ Failed to update");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center h-screen"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <LoaderCircle className="text-[#462f86] animate-spin" size={60} />
        <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
      </motion.div>
    );
  }

  return (
    <div className="mt-[6rem] max-w-2xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">
        Admin Panel <br /> About Section
      </h1>

      <label className="block mb-2 font-semibold">Title:</label>
      <input
        type="text"
        value={aboutex.title}
        onChange={(e) => handleChange("title", e.target.value)}
        className="border p-2 mb-4 block w-full rounded"
      />

      <label className="block mb-2 font-semibold">Description:</label>
      <textarea
        value={aboutex.description}
        onChange={(e) => handleChange("description", e.target.value)}
        className="border p-3 mb-4 block w-full h-40 rounded"
      />

      <button
        onClick={handleSave}
        disabled={saving}
        className={`w-full p-2 rounded text-white font-medium ${
          saving ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
}
