export interface LoadingSkeletonProps {
  count?: number; // number of skeleton rows
}

export interface Chapter {
  id: number;
  name: string;
  name_simple: string;
  name_complex: string;
  name_arabic: string;
  pages: number[];
  revelation_order: number;
  revelation_place: string;
  translated_name: {
    language_name: string;
    name: string;
  };
  language_name: string;
  bismillah_pre: boolean;
  verses_count: number;
}
