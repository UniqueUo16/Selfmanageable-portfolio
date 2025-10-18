"use client";

import { Edit } from "lucide-react";
import Link from "next/link";
import axios from "axios";

export default function Dashboard() {
  // DELETE HANDLERS
  const handleDeleteHero = async () => {
    try {
      const res = await axios.delete("http://localhost:8000/hero");
      alert(res.data.status || "Hero deleted ✅");
    } catch (err) {
      console.error("Error deleting hero:", err);
    }
  };

  const handleDeleteAbout = async () => {
    try {
      const res = await axios.delete("http://localhost:8000/aboutex");
      alert(res.data.status || "About deleted ✅");
    } catch (err) {
      console.error("Error deleting about:", err);
    }
  };

  const handleDeleteServiceex = async () => {
    try {
      const res = await axios.delete("http://localhost:8000/serviceex");
      alert(res.data.status || "Serviceex deleted ✅");
    } catch (err) {
      console.error("Error deleting serviceex:", err);
    }
  };

  const handleDeleteSkillex = async () => {
    try {
      const res = await axios.delete("http://localhost:8000/skillex");
      alert(res.data.status || "Skills deleted ✅");
    } catch (err) {
      console.error("Error deleting skills:", err);
    }
  };

  const handleDeleteTesti = async () => {
    try {
      const res = await axios.delete("http://localhost:8000/testimonialex");
      alert(res.data.status || "Testimonials deleted ✅");
    } catch (err) {
      console.error("Error deleting testimonials:", err);
    }
  };

  const handleDeleteTeam = async () => {
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/team`);
      alert(res.data.status || "Team deleted ✅");
    } catch (err) {
      console.error("Error deleting team:", err);
    }
  };

  return (
    <div className="px-4 sm:px-8 mt-[6rem] space-y-4">
      {/* Hero */}
      <span className="flex gap-3 font-semibold"><Edit/>Homepage Section <br/><a href="/">click me to go back</a> </span>
      <SectionRow
        title="Hero"
        editLink="/env/Hero"
        deleteHandler={handleDeleteHero}
      />

      {/* About */}
      <SectionRow
        title="Aboutpage"
        editLink="/env/aboutex"
        deleteHandler={handleDeleteAbout}
      />

      {/* Serviceex */}
      <SectionRow
        title="Service on home"
        editLink="/env/serex"
        deleteHandler={handleDeleteServiceex}
      />

      {/* Skillex */}
      <SectionRow
        title="Skills on home"
        editLink="/env/skillex"
        deleteHandler={handleDeleteSkillex}
      />

      {/* Testimonials */}
      <SectionRow
        title="Testimonials on home"
        editLink="/env/testimonialex"
        deleteHandler={handleDeleteTesti}
      />

      {/* Team */}
      <SectionRow
        title="Team section on home"
        editLink="/env/uTeam"
        deleteHandler={handleDeleteTeam}
      />
    </div>
  );
}

// REUSABLE COMPONENT
function SectionRow({ title, editLink, deleteHandler }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b py-3">
      <Link href={editLink} className="font-semibold text-lg border-b border-[#332899]">
        {title}
      </Link>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <Link href={editLink} className="bg-[#3e22bd] px-4 py-2 text-white rounded">
          Edit
        </Link>
        <button
          onClick={deleteHandler}
          className="bg-red-600 px-4 py-2 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
