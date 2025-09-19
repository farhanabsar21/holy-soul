import { Chapter } from "@/@types/components";
import React from "react";

interface SurahCard {
  key: number;
  chapter: Chapter;
}

function SurahSummaryCard({ chapter }: SurahCard) {
  return (
    <div
      key={chapter.id}
      className="bg-white border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col justify-between"
    >
      <div>
        <h2 className="text-xl font-semibold">{chapter.name}</h2>
        <p className="text-gray-500 text-sm">{chapter.name_arabic}</p>
        <p className="text-gray-700 mt-2">
          {chapter.translated_name.name} —{" "}
          {chapter.revelation_place.toUpperCase()}
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
