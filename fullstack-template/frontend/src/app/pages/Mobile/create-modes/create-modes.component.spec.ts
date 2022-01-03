import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModesComponent } from './create-modes.component';

describe('CreateModesComponent', () => {
  let component: CreateModesComponent;
  let fixture: ComponentFixture<CreateModesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateModesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
