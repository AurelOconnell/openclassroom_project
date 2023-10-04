import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-pics',
  templateUrl: './share-pics.component.html',
  styleUrls: ['./share-pics.component.scss']
})
export class SharePicsComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date;
  likes!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit(): void {
      this.title = 'Un Chapeau';
      this.description = 'Un beau chapeau';
      this.createdDate = new Date;
      this.likes = 0;
      this.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/3916Chapeau_tendu.png/1200px-3916Chapeau_tendu.png';
      this.buttonText = "This pic!!";
  }

  onLike() {
    if(this.buttonText === 'This pic!!') {
      this.likes++;
      this.buttonText = 'Nay!'
    } else {
      this.likes--;
      this.buttonText = 'This pic!!';
    }
  }
}
