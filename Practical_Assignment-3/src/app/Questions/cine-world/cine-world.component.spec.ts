import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineWorldComponent } from './cine-world.component';

describe('CineWorldComponent', () => {
  let component: CineWorldComponent;
  let fixture: ComponentFixture<CineWorldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CineWorldComponent]
    });
    fixture = TestBed.createComponent(CineWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
