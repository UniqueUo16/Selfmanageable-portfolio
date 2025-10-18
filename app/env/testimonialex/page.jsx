"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { LoaderCircle } from "lucide-react"

export default function Testimonialex() {
    const router = useRouter();
    const [loading, setloading] = useState(true)
    const [tes, setTes] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:8000/testmonialex");
            setTes(res.data)
            setloading(false)
        }
        fetchData();
    }, [])

    const handleChange = (field, value) => {
        setTes({...tes, [field]: value})
    }
    const handleSave = async () => {
        try {
            const res = await axios.post("http://localhost:8000/testimonialex", tes)
            setTes(res.data)
            alert("updated ✅")
            setTimeout(() => router.push("/udashboard"), 1500);
        } catch (error) {
            console.log(error);
            alert("/❌ Failed on updating")
        }
    }


    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-white">
                <LoaderCircle className="text-[#462f86] animate-spin" size={60} />
                <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
            </div>
        );
    }
    return (
        <div>
            <label>Title:</label>
            <input type="text" value={tes.title} onChange={(e) => handleChange("title", e.target.value)}
 className="border p-2 mb-4 block"
            />
            <label>Comment:</label>
            <input type="text" value={tes.comment} onChange={(e) => handleChange("comment", e.target.value)}
   className="border p-2 mb-4 block"
            />

            <button
                onClick={handleSave}
                className="bg-blue-600 mt-6 w-full sm:w-auto px-6 py-2 text-white rounded hover:bg-blue-700"
            >
                Append Changes And Save
            </button>
        </div>
    )
}