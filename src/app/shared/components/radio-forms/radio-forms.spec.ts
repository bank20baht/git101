import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioForms } from './radio-forms';

describe('RadioForms', () => {
  let component: RadioForms;
  let fixture: ComponentFixture<RadioForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
