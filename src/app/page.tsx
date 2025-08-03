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
      <form className="flex flex-col items-center gap-2 mt-4">
        <input
          type="email"
          placeholder="emailkamu@gmail.com"
          className="border rounded px-3 py-2 w-64"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}
