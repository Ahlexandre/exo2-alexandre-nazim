import {Component} from '@angular/core';
import {FilmModel} from '../../model/film';

@Component({
  selector: 'app-liste',
  imports: [],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class Liste {
  public films: FilmModel[] = [
    {
      title: 'Batman',
      poster: 'assets/batman.jpg'
    },
    {
      title: 'Batman Begins',
      poster: 'assets/batmanbegins.jpg'
    },
    {
      title: 'The Dark Knight : Le Chevalier noir',
      poster: 'assets/thedarknightchevaliernoir.jpg'
    },
    {
      title: 'The Dark Knigh Rises',
      poster: 'assets/thedarkknightrises.jpeg'
    },
    {
      title: 'The Batman',
      poster: 'assets/thebatman.jpg'
    }
  ];

  public selectedFilm: FilmModel | null = null;

  public chooseFilm(film: FilmModel) {
    this.selectedFilm = film;
  }
}
