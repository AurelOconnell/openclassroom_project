import { Component, OnInit } from '@angular/core';
import { SharePics } from '../models/share-pics.models';
import { SharePicsService } from '../service/share-pics.service';

@Component({
  selector: 'app-share-pics-list',
  templateUrl: './share-pics-list.component.html',
  styleUrls: ['./share-pics-list.component.scss'],
})
export class SharePicsListComponent implements OnInit {
  sharePics!: SharePics[];

  constructor(private sharePicsService: SharePicsService) {}

  ngOnInit(): void {
    this.sharePics = this.sharePicsService.getAllSharePics();
  }
}
