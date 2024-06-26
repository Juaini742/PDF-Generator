import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastComponent } from './fast.component';

describe('FastComponent', () => {
  let component: FastComponent;
  let fixture: ComponentFixture<FastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
