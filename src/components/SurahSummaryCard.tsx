import { Chapter } from "@/@types/components";
import React from "react";

interface SurahCard {
  chapter: Chapter;
}

function SurahSummaryCard({ chapter }: SurahCard) {
  return (
    <div
      key={chapter.id}
      className="bg-white border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col justify-between cursor-pointer"
    >
      <div>
        <h2 className="text-xl font-semibold">{chapter.name}</h2>
        <p className="text-emerald-500 text-lg">{chapter.name_arabic}</p>
        <p className="text-gray-900 text-sm">
          {chapter.revelation_place.toUpperCase()}
        </p>
        <p className="text-gray-700 mt-2">
          {chapter.name_simple} <span>({chapter.translated_name.name})</span>
        </p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-600">
          Verses: {chapter.verses_count}
        </span>
        {chapter.bismillah_pre && (
          <span className="text-green-600 font-bold text-sm">
            Bismillah Pre
          </span>
        )}
      </div>
    </div>
  );
}

export default SurahSummaryCard;
