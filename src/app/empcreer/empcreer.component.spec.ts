import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcreerComponent } from './empcreer.component';

describe('EmpcreerComponent', () => {
  let component: EmpcreerComponent;
  let fixture: ComponentFixture<EmpcreerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpcreerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
