import { Component, OnInit, Input } from '@angular/core';
import { SharePics } from '../models/share-pics.models';

@Component({
  selector: 'app-share-pics',
  templateUrl: './share-pics.component.html',
  styleUrls: ['./share-pics.component.scss']
})
export class SharePicsComponent implements OnInit{

  @Input() sharePics!: SharePics;

  buttonText!: string;

  ngOnInit(): void {
      this.buttonText = "This pic!!";
  }

  onLike() {
    if(this.buttonText === 'This pic!!') {
      this.sharePics.likes++;
      this.buttonText = 'Nay!'
    } else {
      this.sharePics.likes--;
      this.buttonText = 'This pic!!';
    }
  }
}
