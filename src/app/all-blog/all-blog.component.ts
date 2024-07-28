import { Component, inject, OnInit } from '@angular/core';
import { Blog } from '../interface/blog';
import { BlogService } from '../service/blog.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HighlightDirective } from '../attribute-directives/highlight.directive';
import { BlogHighlightDirective } from '../attribute-directives/blog/blog-highlight.directive';

@Component({
  selector: 'app-all-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, BlogHighlightDirective],
  templateUrl: './all-blog.component.html',
  styleUrl: './all-blog.component.css'
})
export class AllBlogComponent implements OnInit {

  blogList : Blog[] = [];
  blogService = inject(BlogService);

  constructor(private router:Router){

  }

  ngOnInit(){
    this.blogService.getAllHousingLocations().then((blogList:Blog[]) => {
      this.blogList = blogList;
      if(this.blogList.length === 0){
        this.router.navigate(['/not-found'])
      }
    })
    console.log("Blog list: ", this.blogList);
  }
}
