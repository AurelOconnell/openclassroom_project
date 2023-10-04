import { Component, OnInit } from '@angular/core';
import { SharePics } from './models/share-pics.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sharePics!: SharePics[];

  ngOnInit(): void {
    this.sharePics = [
      {
        title: 'La Savoie',
        description: 'Carte de la Savoie',
        createdDate: new Date(),
        likes: 3,
        imageUrl: 'https://www.larousse.fr/encyclopedie/data/cartes/1300307-Savoie.HD.jpg',
      },
      {
        title: 'Des montagnes',
        description: 'Magnifique lieu de randonnée',
        createdDate: new Date(),
        likes: 10,
        imageUrl: 'https://media.routard.com/image/83/0/photo.1536830.jpg',
        location: 'Savoie'
      },
      {
        title: 'Un lac de montagne',
        description: 'Pour se prélasser au bord pendant la rando',
        createdDate: new Date(),
        likes: 12,
        imageUrl: 'https://www.cieau.com/wp-content/uploads/2022/04/montagne-2.jpg',
        location: 'Isère'
      },
      {
        title: 'La Savoie',
        description: 'Carte de la Savoie',
        createdDate: new Date(),
        likes: 3,
        imageUrl: 'https://www.larousse.fr/encyclopedie/data/cartes/1300307-Savoie.HD.jpg',
      },
      {
        title: 'Des montagnes',
        description: 'Magnifique lieu de randonnée',
        createdDate: new Date(),
        likes: 10,
        imageUrl: 'https://media.routard.com/image/83/0/photo.1536830.jpg',
        location: 'Savoie'
      },
      {
        title: 'Un lac de montagne',
        description: 'Pour se prélasser au bord pendant la rando',
        createdDate: new Date(),
        likes: 12,
        imageUrl: 'https://www.cieau.com/wp-content/uploads/2022/04/montagne-2.jpg',
        location: 'Isère'
      },
    ];
      
  }
}
