import { Injectable } from '@angular/core';
import { SharePics } from '../models/share-pics.models';

@Injectable({
  providedIn: 'root',
})
export class SharePicsService {
  sharePics: SharePics[] = [
    {
      id: 1,
      title: 'La Savoie',
      description: 'Carte départementale de la Savoie',
      createdDate: new Date(),
      likes: 100,
      imageUrl:
        'https://www.larousse.fr/encyclopedie/data/cartes/1300307-Savoie.HD.jpg',
    },
    {
      id: 2,
      title: 'Des montagnes',
      description: 'Magnifique lieu de randonnée',
      createdDate: new Date(),
      likes: 160,
      imageUrl: 'https://media.routard.com/image/83/0/photo.1536830.jpg',
      location: 'Savoie',
    },
    {
      id: 3,
      title: 'Un lac de montagne',
      description: 'Pour se prélasser au bord pendant la rando',
      createdDate: new Date(),
      likes: 240,
      imageUrl:
        'https://www.cieau.com/wp-content/uploads/2022/04/montagne-2.jpg',
      location: 'Isère',
    },
  ];

  getAllSharePics(): SharePics[] {
    return this.sharePics;
  }

  getSharePicsById(sharePicsId: number): SharePics {
    const sharePics = this.sharePics.find(
      (sharePics) => sharePics.id === sharePicsId
    );
    if (!sharePics) {
      throw new Error('Pic not found');
    } else {
      return sharePics;
    }
  }

  likeSharePicsById(sharePicsId: number, picType: 'like' | 'unlike'): void {
    const sharePics = this.getSharePicsById(sharePicsId);
    picType === 'like' ? sharePics.likes++ : sharePics.likes--;
  }
}
