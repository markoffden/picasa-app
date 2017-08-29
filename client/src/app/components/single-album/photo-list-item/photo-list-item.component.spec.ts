import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListItemComponent } from './photo-list-item.component';

describe('PhotoListItemComponent', () => {
  let component: PhotoListItemComponent;
  let fixture: ComponentFixture<PhotoListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
