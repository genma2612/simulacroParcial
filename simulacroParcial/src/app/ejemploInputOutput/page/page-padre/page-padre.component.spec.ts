import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePadreComponent } from './page-padre.component';

describe('PagePadreComponent', () => {
  let component: PagePadreComponent;
  let fixture: ComponentFixture<PagePadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
