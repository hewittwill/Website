import { Component, OnInit } from '@angular/core';

import { MarkdownService } from 'ngx-markdown'
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
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
export class BlogComponent implements OnInit {

  constructor(private markdownService: MarkdownService) { }

  ngOnInit(): void {
  }

}
