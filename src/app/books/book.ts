export interface Book {
  id: number | null;
  title: string;
  author: string;
  pages: number;
  cover?: string;
}
