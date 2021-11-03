import { Book } from '../models/book';
import { generateName } from './random-title-generator';
import { generateHumanName } from './random-names-generator';

const BOOKS: Book[] = [];
const booksCount = 50;
const pagesMin = 50;
const pagesMax = 1000;

for (let i = 0; i < booksCount; i++) {
  BOOKS.push({
    id: i + 1,
    title: generateName(),
    author: generateHumanName(),
    pages: Math.floor(Math.random() * (pagesMax - pagesMin + 1)) + pagesMin,
  });
}

export { BOOKS };
