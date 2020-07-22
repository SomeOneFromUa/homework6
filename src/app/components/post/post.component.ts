import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPost} from '../../interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
post: IPost;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => this.post = history.state);
  }

  ngOnInit(): void {
  }

}
