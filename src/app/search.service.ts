import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseurl ="https://api.publicapis.org/entries"

  constructor() { }
}
