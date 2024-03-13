import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDestinationComponent } from './post-destination.component';

describe('PostDestinationComponent', () => {
  let component: PostDestinationComponent;
  let fixture: ComponentFixture<PostDestinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostDestinationComponent]
    });
    fixture = TestBed.createComponent(PostDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
