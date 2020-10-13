import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigChampionCardComponent } from './big-champion-card.component';

describe('BigChampionCardComponent', () => {
  let component: BigChampionCardComponent;
  let fixture: ComponentFixture<BigChampionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigChampionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigChampionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
