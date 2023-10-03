import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePicsComponent } from './share-pics.component';

describe('SharePicsComponent', () => {
  let component: SharePicsComponent;
  let fixture: ComponentFixture<SharePicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharePicsComponent]
    });
    fixture = TestBed.createComponent(SharePicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
