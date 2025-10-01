import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  //template: '<h1>Hola Mundo!, desde {{ city }} con html as string</h1>',
  styleUrl: './app.css'
})
export class App {
  city = 'Bogota'
  protected readonly title = signal('itaca');
}

