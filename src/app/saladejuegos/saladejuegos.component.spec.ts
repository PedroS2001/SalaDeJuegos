import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladejuegosComponent } from './saladejuegos.component';

describe('SaladejuegosComponent', () => {
  let component: SaladejuegosComponent;
  let fixture: ComponentFixture<SaladejuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladejuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladejuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
