import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  //template: '<h1>Hola Mundo!, desde {{ city }} con html as string</h1>',
  styleUrl: './app.css'
})
export class App {
  city = 'Bogota'
  protected readonly title = signal('itaca');
}
