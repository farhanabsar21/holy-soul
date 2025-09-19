/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSkeleton from "../components/LoadingSkeleton";

export default function HomePage() {
  const [chapters, setChapters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/chapters").then((res) => {
      setChapters(res.data.data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="p-6">
        <LoadingSkeleton count={5} />
      </div>
    );

  return (
    <>
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16 px-6 text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Holy Soul</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Best learning oriented platform for Holy Quran.
        </p>
      </section>

      <section className="px-6">
        <h2 className="text-2xl font-semibold mb-4">
          Chapters {chapters ? chapters.length : 0}
        </h2>
        <ul className="space-y-3">
          {chapters &&
            chapters.map((ch) => (
              <li
                key={ch.id}
                className="p-4 rounded-lg shadow hover:bg-gray-50 transition"
              >
                <span className="font-medium">{ch.name}</span>{" "}
                <span className="text-gray-500">({ch.name_arabic})</span>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
