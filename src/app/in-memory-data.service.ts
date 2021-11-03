import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RequestInfo } from 'angular-in-memory-web-api/interfaces';

import { Book } from './books/book';
import { generateHumanName } from './helpers/random-names-generator';
import { generateName } from './helpers/random-title-generator';
import { Observable } from 'rxjs';
import { Genre } from './genres/genre';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const genres: Genre[] = [];
    const books: Book[] = [];
    // const users: User[] = [];
    const booksCount = 10;
    const pagesMin = 50;
    const pagesMax = 1000;

    genres.push(
      {
        id: 1,
        name: 'horror',
      },
      {
        id: 2,
        name: 'thriller',
      },
      {
        id: 3,
        name: 'fantasy',
      },
      {
        id: 4,
        name: 'science-fiction',
      },
      {
        id: 5,
        name: 'comedy',
      }
    );

    for (let i = 0; i < booksCount; i++) {
      books.push({
        id: i + 1,
        title: generateName(),
        author: generateHumanName(),
        pages: Math.floor(Math.random() * (pagesMax - pagesMin + 1)) + pagesMin,
      });
    }

    // users.push(
    //   {
    //     id: 1,
    //     name: 'Admin',
    //     email: 'admin@example.com',
    //     password: 'abc123',
    //     roles: ['admin'],
    //     books: [books[0], books[10], books[2]],
    //   },
    //   {
    //     id: 2,
    //     name: 'User1',
    //     email: 'user1@example.com',
    //     password: 'abc123',
    //     roles: ['user'],
    //     books: [books[1], books[11], books[12]],
    //   },
    //   {
    //     id: 3,
    //     name: 'User2',
    //     email: 'user2@example.com',
    //     password: 'abc123',
    //     roles: ['user'],
    //     books: [books[21], books[41], books[16]],
    //   }
    // );
    return { books, genres };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map((book) => book.id)) + 1 : 1;
  }

  // HTTP POST interceptor
  post(reqInfo: RequestInfo) {
    // if client pinged api/authentication
    //  then call authenticate (defined below)
    if (reqInfo.collectionName === 'authentication')
      return this.authenticate(reqInfo);

    //  otherwise default response of In-memory DB
    return undefined;
  }

  // mocking authentication happens here
  // HTTP POST interceptor handler
  private authenticate(reqInfo: any) {
    // return an Observable response
    return reqInfo.utils.createResponse$(() => {
      console.log('HTTP POST api/authentication override');

      const { headers, url, req } = reqInfo;

      // if request email and passord are correct
      //  return response with a JSONWebToken
      console.log(req.body);

      const { email, password } = req['body'];
      if (email === 'admin@example.com' && password === '123abc')
        return {
          status: 200,
          headers, // reqInfo (line 30)
          url, // reqInfo (line 30)
          body: {
            idToken:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
          },
        };

      //  otherwise return response with status code 401 (unauthorized)
      return {
        status: 401,
        headers,
        url,
        body: {},
      };
    });
  }
}
