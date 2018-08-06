import {Component} from '@angular/core';
import {CustomService} from './test.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private customService: CustomService) {
  }
}
