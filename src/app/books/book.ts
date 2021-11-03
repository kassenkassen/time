export interface Book {
  id: number | null;
  title: string;
  author: string;
  pages: number;
  genreId: number;
  cover?: string;
}
