"use client";

import { useState, useEffect } from "react";
import { MessageCircleQuestionIcon, SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  // --- handle image preview ---
  useEffect(() => {
    if (imageUpload) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(imageUpload);
    }
  }, [imageUpload]);

  const handleImageChange = (e) => {
    setImageUpload(e.target.files[0]);
  };

  // --- handle form submission ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    if (imageUpload) formData.append("image", imageUpload);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send-mail`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ " + data.message);
        router.push("/Ex/Teampage/#projects");
      } else {
        alert("❌ " + (data.message || "Failed to send email"));
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-[#dfdde2] mt-[10rem]">
      <div>
        <form onSubmit={handleSubmit} className="p-3 rounded-sm shadow-2xl">
          <button
            type="submit"
            disabled={isSending}
            className="mx-[20rem] sm:mx-[70rem] font-semibold flex gap-1 items-center"
          >
            Send
            <SendIcon
              className={`text-[#4739cc] ${isSending ? "animate-spin" : ""}`}
            />
          </button>

          <div className="m-4 flex gap-12">
            <div className="m-4">
              <span
                className="font-semibold text-[#636161]"
                style={{ fontVariant: "small-caps" }}
              >
                Enter your Fullname
              </span>
              <br />
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="active:bg-white w-full p-2 rounded-sm"
                placeholder="Enter your Full name"
                required
              />
              <br />
            </div>

            <div className="">
              <span
                className="font-semibold text-[0.9rem] text-[#636161]"
                style={{ fontVariant: "small-caps" }}
              >
                Pls Upload Apic of You (optional)
              </span>
              <br />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                placeholder="Upload a pic of you "
                className="text-[0.77rem] absolute"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="border-6 border-[#8c55eb] w-[25vw] h-[20vh] mt-[3rem] ml-[1.5rem] absolute object-cover rounded-full"
                />
              )}
              <br />
            </div>
          </div>

          <div className="m-3">
            <span
              className="font-bold text-[#636161]"
              style={{ fontVariant: "small-caps" }}
            >
              Please Enter Your email
            </span>
            <br />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-[65vw] p-2 rounded-sm"
              placeholder="Enter your email"
              required
            />
            <br />
          </div>
          <br />

          <div className="p-3 mt-[-1rem]">
            <span className="flex gap-2 font-mono text-[#636161]">
              Any Intentions <MessageCircleQuestionIcon />
            </span>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className="w-full py-[2rem] bg-white rounded-sm p-2"
              placeholder="Enter a message"
              required
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
