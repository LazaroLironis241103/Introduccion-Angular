import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoComponente } from './nuevo-componente';

describe('NuevoComponente', () => {
  let component: NuevoComponente;
  let fixture: ComponentFixture<NuevoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
