import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  
  getAuthors() {
    return ["CCCC", "AAA", "5784521"];
  }
  
  constructor() { }
}
