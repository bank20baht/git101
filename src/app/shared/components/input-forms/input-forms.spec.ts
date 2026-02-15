import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputForms } from './input-forms';

describe('InputForms', () => {
  let component: InputForms;
  let fixture: ComponentFixture<InputForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
