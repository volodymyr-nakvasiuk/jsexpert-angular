import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jsexpert-angular';
  listOfUsers: string[] = ['John', 'Clark', 'Lorene', 'Mike', 'Scooter', 'Zak'];
}
