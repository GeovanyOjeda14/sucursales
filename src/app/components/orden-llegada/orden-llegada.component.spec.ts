import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenLlegadaComponent } from './orden-llegada.component';

describe('OrdenLlegadaComponent', () => {
  let component: OrdenLlegadaComponent;
  let fixture: ComponentFixture<OrdenLlegadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenLlegadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenLlegadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
