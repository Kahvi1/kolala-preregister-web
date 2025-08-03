'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // const [email, setEmail] = useState("");

  // async function handleSubmit(e: React.FormEvent) {
  //   e.preventDefault();
  //   await fetch("/api/email", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email }),
  //   });
  //   setEmail(""); // Optionally clear input
  // }

  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // You can add your fetch logic here if needed
    setShowPopup(true);
    setEmail(""); // Optionally clear input
    setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src='/Kolala - Icon Blue.png'
        alt='Kolala Icon'
        width={128 * 3}
        height={81 * 10}
        priority
      />
      <h1>Kolala</h1>
      <p>Memudahkan kolaborasi iklan antara bisnis dan konten kreator</p>
      <form
        className="flex flex-col items-center gap-2 mt-4"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="emailkamu@gmail.com"
          className="border rounded px-3 py-2 w-64"
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Kirim
        </button>
      </form>
      {showPopup && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white text-black border px-6 py-4 rounded shadow-lg z-50">
          Email berhasil dikirim!
        </div>
      )}
    </div>
  );
}
