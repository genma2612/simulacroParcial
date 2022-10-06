import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActorPeliculasComponent } from './detalle-actor-peliculas.component';

describe('DetalleActorPeliculasComponent', () => {
  let component: DetalleActorPeliculasComponent;
  let fixture: ComponentFixture<DetalleActorPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleActorPeliculasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleActorPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
