"use client";

import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Uteam() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      alert("Update coming soon✌️ Stay Tuned and contact the developer 'Unique Uo' on Linkedin connect and send him a message") 
      router.push("/udashboard");
    }, 100);

    return () => clearTimeout(timer); // cleanup
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <span className="flex gap-3 items-center">
        ...fetching data
        <LoaderCircle className="animate-spin" />
      </span>
    </div>
  );
}
