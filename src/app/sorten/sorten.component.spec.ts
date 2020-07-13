import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortenComponent } from './sorten.component';

describe('SortenComponent', () => {
  let component: SortenComponent;
  let fixture: ComponentFixture<SortenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
