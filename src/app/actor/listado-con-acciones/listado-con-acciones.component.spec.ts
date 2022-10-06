import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoConAccionesComponent } from './listado-con-acciones.component';

describe('ListadoConAccionesComponent', () => {
  let component: ListadoConAccionesComponent;
  let fixture: ComponentFixture<ListadoConAccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoConAccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoConAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
