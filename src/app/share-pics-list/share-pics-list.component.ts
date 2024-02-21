import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharePics } from '../models/share-pics.models';
import { SharePicsService } from '../service/share-pics.service';
import { Subject, interval, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-share-pics-list',
  templateUrl: './share-pics-list.component.html',
  styleUrls: ['./share-pics-list.component.scss'],
})
export class SharePicsListComponent implements OnInit, OnDestroy {

  sharePics!: SharePics[];
  private destroy$!: Subject<boolean>;

  constructor(private sharePicsService: SharePicsService) {}

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.sharePics = this.sharePicsService.getAllSharePics();

    interval(500).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy(): void {
      this.destroy$.next(true);
  }
}
