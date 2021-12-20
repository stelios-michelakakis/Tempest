import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMethodComponent } from './input-method.component';

describe('InputMethodComponent', () => {
  let component: InputMethodComponent;
  let fixture: ComponentFixture<InputMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
