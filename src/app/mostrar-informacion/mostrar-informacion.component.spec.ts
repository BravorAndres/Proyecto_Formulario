import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarInformacionComponent } from './mostrar-informacion.component';

describe('MostrarInformacionComponent', () => {
  let component: MostrarInformacionComponent;
  let fixture: ComponentFixture<MostrarInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarInformacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
