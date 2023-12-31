import { Component, OnInit, Input } from '@angular/core';
import { SharePics } from '../models/share-pics.models';
import { SharePicsService } from '../service/share-pics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-pics',
  templateUrl: './share-pics.component.html',
  styleUrls: ['./share-pics.component.scss'],
})
export class SharePicsComponent implements OnInit {
  @Input() sharePics!: SharePics;
  buttonText!: string;

  constructor(
    private sharePicsService: SharePicsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buttonText = 'This pic!!';
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

  onViewSharePics() {
    this.router.navigateByUrl(`sharepics/${this.sharePics.id}`)
  }
}
