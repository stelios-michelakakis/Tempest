import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { VotingPhaseComponent } from './voting-phase.component';

describe('VotingPhaseComponent', () => {
  let component: VotingPhaseComponent;
  let fixture: ComponentFixture<VotingPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
