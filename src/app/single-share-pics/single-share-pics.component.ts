import { Component, OnInit } from '@angular/core';
import { SharePics } from '../models/share-pics.models';
import { SharePicsService } from '../service/share-pics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-share-pics',
  templateUrl: './single-share-pics.component.html',
  styleUrls: ['./single-share-pics.component.scss'],
})
export class SingleSharePicsComponent implements OnInit {
  sharePics!: SharePics;
  buttonText!: string;

  constructor(
    private sharePicsService: SharePicsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buttonText = 'This pic!!';
    const sharePicsId = +this.route.snapshot.params['id'];
    this.sharePics = this.sharePicsService.getSharePicsById(sharePicsId);
  }

  onLike() {
    if (this.buttonText === 'This pic!!') {
      this.sharePicsService.likeSharePicsById(this.sharePics.id, 'like');
      this.buttonText = 'Nay!';
    } else {
      this.sharePicsService.likeSharePicsById(this.sharePics.id, 'unlike');
      this.buttonText = 'This pic!!';
    }
  }
}
