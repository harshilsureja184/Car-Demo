import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Petrol } from './petrol';

describe('Petrol', () => {
  let component: Petrol;
  let fixture: ComponentFixture<Petrol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Petrol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Petrol);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
