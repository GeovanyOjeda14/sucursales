import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenosRootComponent } from './contactenos-root.component';

describe('ContactenosRootComponent', () => {
  let component: ContactenosRootComponent;
  let fixture: ComponentFixture<ContactenosRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactenosRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactenosRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
