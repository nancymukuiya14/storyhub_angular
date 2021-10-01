import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blogpost } from './blogpost';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  sourceUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { 

  }
  getBlogpost(user_id) {
    return this.http.get(this.sourceUrl + '/blogpost/' + user_id + '/user');
  }
  getAllBlogs() {
    return this.http.get(this.sourceUrl + '/blogpost');
  }
  addNewBlog(user_id) {
    return this.http.post(this.sourceUrl + '/blogpost'+ '/' + user_id + '/user', {});
  }
 deleteBlog(id) {
  return this.http.delete(this.sourceUrl + '/blogpost/' + id);
 }

}
