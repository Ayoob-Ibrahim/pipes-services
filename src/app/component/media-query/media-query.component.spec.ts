import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaQueryComponent } from './media-query.component';

describe('MediaQueryComponent', () => {
  let component: MediaQueryComponent;
  let fixture: ComponentFixture<MediaQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
