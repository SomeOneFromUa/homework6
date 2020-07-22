import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostService} from '../../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  arr: number[];
  postForm: FormGroup;
  postId: FormControl = new FormControl('1');

  constructor(private postService: PostService, private router: Router) {
    this.arr = Array.from({length: 100}, (v, k) => k + 1);
    this.postForm = new FormGroup({
      postId: this.postId
    });
  }

  ngOnInit(): void {
  }

  getPost(postForm: FormGroup): void {
    this.postService.getUser(postForm.controls.postId.value)
      .subscribe(value => this.router.navigate(['posts', value.id], {state: value}));
  }
}
