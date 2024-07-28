import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../service/blog.service';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo
} from 'ckeditor5';

@Component({
  selector: 'app-new-blog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,CKEditorModule],
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.css'
})
export class NewBlogComponent implements OnInit, OnDestroy{


  public Editor = ClassicEditor;
  public config = {
    toolbar: [
      'undo', 'redo', '|',
      'heading', '|', 'bold', 'italic', '|',
      'link', 'insertTable', 'mediaEmbed', '|',
      'bulletedList', 'numberedList', 'indent', 'outdent'
    ],
    plugins: [
      Bold,
      Essentials,
      Heading,
      Indent,
      IndentBlock,
      Italic,
      Link,
      List,
      MediaEmbed,
      Paragraph,
      Table,
      Undo
    ]
  }
  success = false;
  error  = false;
  html = '';
  // editor: Editor = new Editor;
  message = '';


  ngOnInit(): void {
  // this.editor = new Editor();
  }
  ngOnDestroy(): void {
    // this.editor.destroy();
  }
  blogService = inject(BlogService);
  applyForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required])
  })

  submitBlog(){
    
    if(this.applyForm.valid){
    const data = this.applyForm.value;
    console.log("The blog is written by ", this.applyForm.value.author);
    this.blogService.addBlog(this.applyForm.value.title, data.author, data.content).subscribe(
      response => {
        console.log("Blog Submitted");
        this.success = true;
        this.applyForm.reset();
        this.message = "Blog submitted";
        setTimeout(() => this.success=false, 1500)
      },
      error => {
        console.error('Error submitting application', error);
        this.error = true;
        this.message = error.message;
      }
    );
    }
    else{
      this.error=true;
      this.message = "Please fill up the form";
      setTimeout(() => this.error=false, 4000)
    }
  }


  displayMessage(message:string){

  }
}
