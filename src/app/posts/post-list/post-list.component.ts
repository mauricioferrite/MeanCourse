import { Component, Input } from '@angular/core';

@Component ({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  // posts = [
  //   {title: 'First Title', content: 'First post\'s Content'},
  //   {title: 'Second Title', content: 'Second post\'s Content'},
  //   {title: 'Third Title', content: 'Third post\'s Content'}
  // ];
  @Input() posts = [];
}
