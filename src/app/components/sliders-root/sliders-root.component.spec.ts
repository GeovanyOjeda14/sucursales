import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersRootComponent } from './sliders-root.component';

describe('SlidersRootComponent', () => {
  let component: SlidersRootComponent;
  let fixture: ComponentFixture<SlidersRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidersRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidersRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
