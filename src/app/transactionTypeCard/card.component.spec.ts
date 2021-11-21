import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTypeCard } from './card.component';

describe('TransactionTypeCard', () => {
  let component: TransactionTypeCard;
  let fixture: ComponentFixture<TransactionTypeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionTypeCard],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTypeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
