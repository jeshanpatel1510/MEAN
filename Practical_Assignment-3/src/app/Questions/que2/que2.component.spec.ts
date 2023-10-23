import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Que2Component } from './que2.component';

describe('Que2Component', () => {
  let component: Que2Component;
  let fixture: ComponentFixture<Que2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Que2Component]
    });
    fixture = TestBed.createComponent(Que2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
