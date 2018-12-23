import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupledComponent } from './coupled.component';

describe('CoupledComponent', () => {
  let component: CoupledComponent;
  let fixture: ComponentFixture<CoupledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
