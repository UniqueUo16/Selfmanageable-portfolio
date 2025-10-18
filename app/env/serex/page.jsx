"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

export default function Serex() {
  const router = useRouter();
  const [serData, setSerData] = useState({
    title1: "", des1: "",
    title2: "", des2: "",
    title3: "", des3: "",
    title4: "", des4: ""
  });
  const [loading, setLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/serviceex");
        setSerData(res.data);
      } catch (error) {
        console.error("Error fetching serviceex:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle input changes
  const handleChange = (field, value) => {
    setSerData((prev) => ({ ...prev, [field]: value }));
  };

  // Save updated data
  const handleSave = async () => {
    try {
      await axios.post("http://localhost:8000/serviceex", serData);
      alert("✅ Serviceex updated successfully");
      setTimeout(() => router.push("/udashboard"), 1500);
    } catch (error) {
      console.error("Error saving serviceex:", error);
      alert("❌ Failed to update");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <LoaderCircle className="text-[#462f86] animate-spin" size={60} />
        <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mt-[6rem] px-4 sm:px-8">
      <h1 className="text-2xl font-bold mb-6">
        Admin Panel <br /> Serviceex Panel
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        {["title1", "des1", "title2", "des2", "title3", "des3", "title4", "des4"].map((field) => (
          <div key={field} className="flex flex-col">
            <label className="font-medium mb-1 capitalize">{field}</label>
            <input
              type="text"
              value={serData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-600 mt-6 w-full sm:w-auto px-6 py-2 text-white rounded hover:bg-blue-700"
      >
        Append Changes And Save
      </button>
    </div>
  );
}
