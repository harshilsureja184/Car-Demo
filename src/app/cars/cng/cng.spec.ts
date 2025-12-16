import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cng } from './cng';

describe('Cng', () => {
  let component: Cng;
  let fixture: ComponentFixture<Cng>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cng]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cng);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
