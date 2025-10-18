"use client";

import Image from "next/image";

export default function Whatsapp() {
  return (
    <section className="min-h-screen mt-20 sm:mt-17 flex flex-col justify-center items-center bg-gradient-to-br from-[#1c1c1c] via-[#2e2e2e] to-[#4a4a4a] text-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide mb-2">
          Connect With Me On Telegram
        </h1>
        <p className="text-gray-300 text-sm sm:text-base">
          Scan the QR code below or click the button to start chatting directly on WhatsApp.
        </p>
      </div>

      <div className="flex justify-center items-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
        <Image
          src="/imgs/telegram.JPG"
          alt="WhatsApp QR"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>

      <a
        href="https://wa.me/2349012345678"
        target="_blank"
        className="mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition"
      >
        Chat on telegram
      </a>
    </section>
  );
}
