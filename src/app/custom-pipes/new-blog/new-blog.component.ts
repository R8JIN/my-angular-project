import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-new-blog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,],
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.css'
})
export class NewBlogComponent {

  blogService = inject(BlogService);
  applyForm = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    content: new FormControl()
  })

  submitBlog(){
    const data = this.applyForm.value;
    console.log("The blog is written by ", this.applyForm.value.author);
    this.blogService.addBlog(data.title, data.author, data.content).subscribe(
      response => {
        console.log("Blog Submitted");
      },
      error => {
        console.error('Error submitting application', error);
      }
    );
  }
}
