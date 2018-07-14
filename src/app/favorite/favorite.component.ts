import { Component, OnInit } from '@angular/core';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isFavorite: boolean = false;

  constructor() { }

  ngOnInit() {
  }

    onClick() {
      this.isFavorite = !this.isFavorite;
    }
}
