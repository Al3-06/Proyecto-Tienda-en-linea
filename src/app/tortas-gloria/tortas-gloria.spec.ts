import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortasGloria } from './tortas-gloria';

describe('TortasGloria', () => {
  let component: TortasGloria;
  let fixture: ComponentFixture<TortasGloria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TortasGloria],
    }).compileComponents();

    fixture = TestBed.createComponent(TortasGloria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
