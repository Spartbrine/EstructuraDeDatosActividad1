import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectanguloComponent } from './rectangulo.component';

describe('RectanguloComponent', () => {
  let component: RectanguloComponent;
  let fixture: ComponentFixture<RectanguloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RectanguloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectanguloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
