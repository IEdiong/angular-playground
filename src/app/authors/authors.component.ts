import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  title = 'authors';
  authors = ['Jim Simon', 'John', 'James', 'Peter', 'Joel'];
  constructor() {}

  ngOnInit(): void {}
}
