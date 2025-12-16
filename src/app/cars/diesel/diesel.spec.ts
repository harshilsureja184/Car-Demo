import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diesel } from './diesel';

describe('Diesel', () => {
  let component: Diesel;
  let fixture: ComponentFixture<Diesel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diesel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diesel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
