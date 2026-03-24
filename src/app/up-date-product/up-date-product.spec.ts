import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDateProduct } from './up-date-product';

describe('UpDateProduct', () => {
  let component: UpDateProduct;
  let fixture: ComponentFixture<UpDateProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpDateProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(UpDateProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
