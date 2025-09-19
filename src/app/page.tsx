/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { Chapter } from "@/@types/components";
import SurahSummaryCard from "@/components/SurahSummaryCard";
import ChapterModal from "@/components/SurahModal";

export default function HomePage() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // modal state
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  useEffect(() => {
    axios.get("/api/chapters").then((res) => {
      setChapters(res.data.chapters);
      setLoading(false);
    });
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(chapters.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedChapters = chapters.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const onPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const onNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const surahRanges = () => {
    const endValues =
      startIndex + itemsPerPage === 120 ? 114 : startIndex + itemsPerPage;
    return `${startIndex + 1} - ${endValues}`;
  };

  // selecting the modal
  const onSelectModal = (item: Chapter) => {
    setSelectedChapter(item);
  };

  const onCloseModal = useCallback(() => {
    setSelectedChapter(null);
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

      <section className="py-6 px-12">
        <h2 className="text-2xl font-semibold mb-4">
          Seeing Chapters: {surahRanges()}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedChapters.map((chapter, index) => (
            <div
              key={chapter.id * index}
              onClick={() => onSelectModal(chapter)}
            >
              <SurahSummaryCard chapter={chapter} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={onPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border rounded ${
                currentPage === page ? "bg-emerald-500 text-white" : ""
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={onNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <ChapterModal chapter={selectedChapter} onClose={onCloseModal} />
      </section>
    </>
  );
}
