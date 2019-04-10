import { Component } from '@angular/core';
import { FooLibService } from 'foo-lib';
import { User } from 'foo-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foo-desktop';
  message = '';
  user : User;

  constructor(private fooLibService: FooLibService) {
    this.user = {
      name: 'Lib',
      email: 'a@sd'
    }
  }

  fetchMessage() {
    this.message = this.fooLibService.getMessage();
  }
}
