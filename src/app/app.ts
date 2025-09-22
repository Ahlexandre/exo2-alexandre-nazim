import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './layout/header/header';
import {Footer} from './layout/footer/footer';
import {Liste} from './page/liste/liste';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Liste],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('alexandrenazimTP2');
}
