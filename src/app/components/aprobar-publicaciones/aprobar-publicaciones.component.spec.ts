import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarPublicacionesComponent } from './aprobar-publicaciones.component';

describe('AprobarPublicacionesComponent', () => {
  let component: AprobarPublicacionesComponent;
  let fixture: ComponentFixture<AprobarPublicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobarPublicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
