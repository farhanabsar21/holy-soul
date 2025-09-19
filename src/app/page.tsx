/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { Chapter } from "@/@types/components";
import SurahSummaryCard from "@/components/SurahSummaryCard";

export default function HomePage() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/chapters").then((res) => {
      setChapters(res.data.chapters);
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {chapters.map((chapter) => (
            <SurahSummaryCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </section>
    </>
  );
}
