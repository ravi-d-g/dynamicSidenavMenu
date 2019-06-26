import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { urlConst } from './urlConst';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly getAllPostUrl = `https://jsonplaceholder.typicode.com/posts`;
  constructor(private http: HttpClient) { }

  getAllPost() {
    return this.http.get(`${this.getAllPostUrl}`)
  }
  getSinglePost(id) {
    return this.http.get(`${this.getAllPostUrl}/${id}`)
  }
  savePost(userId, postTitle, postBody) {
    return this.http.post(`${this.getAllPostUrl}`,
      { HttpParams: new HttpParams().set('userId', userId).set('postTitle', postTitle).set('postBody', postBody) }
    )

  }

}
