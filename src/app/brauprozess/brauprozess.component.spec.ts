import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrauprozessComponent } from './brauprozess.component';

describe('BrauprozessComponent', () => {
  let component: BrauprozessComponent;
  let fixture: ComponentFixture<BrauprozessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrauprozessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrauprozessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
