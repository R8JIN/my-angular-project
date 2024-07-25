import { Component, inject, OnInit } from '@angular/core';
import { CustomColorDirective } from '../attribute-directives/custom-color.directive';
import { CustomTextDirective } from '../attribute-directives/blog/custom-text.directive';
import { Blog } from '../interface/blog';
import { BlogService } from '../service/blog.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CustomColorDirective, CustomTextDirective,],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  
  route = inject(ActivatedRoute);
  color=''
  textSize=''
 
  blogList : Blog[] = [];
  blogService = inject(BlogService);
  blog : Blog | undefined;
  

  constructor(private router:Router){
    
  }
  ngOnInit(blog:Blog){
    let blogId =  this.route.snapshot.params['id'];
    console.log("The blog id is ", blogId);
    this.blogService.getById(blogId).then((blog) => {
      this.blog = blog;
    })
    .catch((error) => {

      console.error('Error fetching blog', error);
      if(error.response.status === 404){
        console.log('404')
        this.router.navigate(['/not-found'])
        
      }
      

    });

  }
 
  getAllBlog(){
      this.blogService.getAllHousingLocations().then((blogList:Blog[]) => {
        this.blogList = blogList;
      })
      console.log("Blog list: ", this.blogList);
  }
}
