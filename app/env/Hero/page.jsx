"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Env() {
  const router = useRouter();
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  

  // Fetch existing hero
  useEffect(() => {
    async function fetchHero() {
      const res = await axios.get("http://localhost:8000/hero");
      setHero(res.data);
      setLoading(false);
    }
    fetchHero();
  }, []);

  const handleChange = (field, value) => {
    setHero({ ...hero, [field]: value });
  };

  const handleSave = async () => {
    await axios.post("http://localhost:8000/hero",hero);
    alert("Hero updated!");
    setTimeout(()=>{
      router.push("/udashboard")
    }, 1500);
  };

// Getbackend preloader
if (loading) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <LoaderCircle className="text-[#462f86] animate-spin" size={60} />
      <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-200">
        Loading...
      </p>
    </div>
  );
}
  return (
    <div className="mt-[6rem]">
      <h1 className="text-2xl font-bold mb-4">Admin Panel <br />Hero Panel</h1>
      
      <label>Name:</label>
      <input
        type="text"
        value={hero.name}
        onChange={(e) => handleChange("name", e.target.value)}
        className="border p-2 mb-4 block"
      />

      <label>Title:</label>
      <input
        type="text"
        value={hero.title}
        onChange={(e) => handleChange("title", e.target.value)}
        className="border p-2 mb-4 block"
      />

      <label>Description:</label>
      <textarea
        value={hero.description}
        onChange={(e) => handleChange("description", e.target.value)}
        className="border p-[3rem] mb-4 block w-full"
      />

      <button onClick={handleSave} className="bg-blue-600 w-full text-white p-2 rounded">
        Append Changes And Save
      </button>
    </div>
  );
}
