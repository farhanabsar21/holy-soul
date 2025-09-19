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
    return <LoadingSkeleton count={chapters.length ? chapters.length : 0} />;

  return (
    <>
      <ul className="space-y-2">
        {chapters &&
          chapters.map((ch) => (
            <li key={ch.id}>
              {ch.name} ({ch.name_arabic})
            </li>
          ))}
      </ul>
    </>
  );
}
