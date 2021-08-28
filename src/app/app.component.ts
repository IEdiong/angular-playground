import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>This is to show that I can provide the HTML template inline, as the value of the <code style='color: pink;'>template</code> property for {{title}} App.</h1>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
}
