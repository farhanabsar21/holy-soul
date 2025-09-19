import { Chapter } from "@/@types/components";
import React, { useEffect, useState } from "react";

interface ChapterModalProps {
  chapter: Chapter | null;
  onClose: () => void;
}

export default function ChapterModal({ chapter, onClose }: ChapterModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when chapter changes
  useEffect(() => {
    if (chapter) setIsVisible(true);
    else setIsVisible(false);
  }, [chapter]);

  if (!chapter) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-black bg-opacity-50`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg p-6 w-11/12 max-w-lg relative opacity-100 z-100 transform transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-2">{chapter.name}</h2>
        <p className="text-emerald-500 text-lg mb-1">{chapter.name_arabic}</p>
        <p className="text-gray-700 mb-2">
          {chapter.name_simple} ({chapter.translated_name.name})
        </p>
        <p className="text-gray-600">
          Revelation: {chapter.revelation_place.toUpperCase()}
        </p>
        <p className="text-gray-600">Verses: {chapter.verses_count}</p>
        {chapter.bismillah_pre && (
          <p className="text-green-600 font-bold mt-1">Bismillah Pre</p>
        )}
      </div>
    </div>
  );
}
