import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTripComponent } from './post-trip.component';

describe('PostTripComponent', () => {
  let component: PostTripComponent;
  let fixture: ComponentFixture<PostTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostTripComponent]
    });
    fixture = TestBed.createComponent(PostTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
