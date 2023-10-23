import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que5Component } from './que5.component';

describe('Que5Component', () => {
  let component: Que5Component;
  let fixture: ComponentFixture<Que5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Que5Component]
    });
    fixture = TestBed.createComponent(Que5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
