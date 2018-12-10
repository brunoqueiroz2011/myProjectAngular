import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostesDetailComponent } from './postes-detail.component';

describe('PostesDetailComponent', () => {
  let component: PostesDetailComponent;
  let fixture: ComponentFixture<PostesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
