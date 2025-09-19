import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SurahSummaryCard from "../components/SurahSummaryCard";
import { Chapter } from "../@types/components";

const mockChapter: Chapter = {
  id: 1,
  name: "Al-Fatihah",
  name_arabic: "الفاتحة",
  name_simple: "Al-Fatihah",
  name_complex: "Al-Fātiĥah",
  pages: [1, 1],
  revelation_order: 5,
  revelation_place: "makkah",
  translated_name: { language_name: "english", name: "The Opener" },
  verses_count: 7,
  bismillah_pre: true,
  language_name: "english",
};

describe("SurahSummaryCard", () => {
  it("renders chapter data correctly", () => {
    render(<SurahSummaryCard chapter={mockChapter} />);

    // heading
    expect(
      screen.getByRole("heading", { name: "Al-Fatihah" })
    ).toBeInTheDocument();

    // Arabic name
    expect(screen.getByText("الفاتحة")).toBeInTheDocument();

    // revelation place
    expect(screen.getByText("MAKKAH")).toBeInTheDocument();

    // verses count
    expect(screen.getByText("Verses: 7")).toBeInTheDocument();

    // bismillah
    expect(screen.getByText("Bismillah Pre")).toBeInTheDocument();
  });
});
