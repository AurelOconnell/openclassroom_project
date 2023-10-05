import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePicsListComponent } from './share-pics-list.component';

describe('SharePicsListComponent', () => {
  let component: SharePicsListComponent;
  let fixture: ComponentFixture<SharePicsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharePicsListComponent]
    });
    fixture = TestBed.createComponent(SharePicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
