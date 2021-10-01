import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { Blogpost } from 'src/app/blogpost';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  title: string;
  content: string;
  author: string;
  user_id;

  allblogs
  comments
  constructor(private blogService: BlogService) {
   };
  

  ngOnInit(): void {
    this.getAllBlogs();
  }
  getAllBlogs() {
    this.blogService.getAllBlogs().subscribe(data => {
        console.log(data);
        this.allblogs = data;
      }
    )
  }
  addNewBlog(){}
  

//   addNewBlog(){
//     this.blogService
//     .addBlog(new blog(this.title, this.content, this.author, this.user_id))
//     .subscribe((response) => {
//         console.log(response);
//         this.getAllBlogs();
//       },
//       (error) => {
//         console.log(error);
//       }
//     )
//   }


// 
}
