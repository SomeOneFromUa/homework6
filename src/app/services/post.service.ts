import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost, IUser} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) { }
  getUser = (postID: number): Observable<IPost> => {
    return this.httpClient.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${postID}`);
  }
}
