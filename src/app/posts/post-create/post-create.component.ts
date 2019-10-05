import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  newPost = ' ';
  enteredValue = ' ';
  newPost2 = ' ';

  onPostAdd(postInput: HTMLTextAreaElement) {
    this.newPost = this.enteredValue;
  }

  onPostAdd2(enteredValue: HTMLTextAreaElement) {
    this.newPost2 = this.enteredValue;
  }
}
