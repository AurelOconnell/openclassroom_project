import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSharePicsComponent } from './single-share-pics.component';

describe('SingleSharePicsComponent', () => {
  let component: SingleSharePicsComponent;
  let fixture: ComponentFixture<SingleSharePicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleSharePicsComponent]
    });
    fixture = TestBed.createComponent(SingleSharePicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
