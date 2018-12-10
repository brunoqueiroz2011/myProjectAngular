import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostesComponent } from './feed-postes.component';

describe('FeedPostesComponent', () => {
  let component: FeedPostesComponent;
  let fixture: ComponentFixture<FeedPostesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedPostesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPostesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
