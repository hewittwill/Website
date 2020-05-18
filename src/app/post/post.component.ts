import { Component, OnInit } from '@angular/core';

import { MarkdownService } from 'ngx-markdown'
import { ViewEncapsulation } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import { Subscription } from 'rxjs'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  styles: [`
  .variable-binding,
  p {
    width: 435px;
    text-align: justify;
  }
`],
providers: [ MarkdownService ],
encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  private sub: Subscription;
  post: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.post = 'assets/posts/' +  params['id'] + '.md';
    });
    
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
