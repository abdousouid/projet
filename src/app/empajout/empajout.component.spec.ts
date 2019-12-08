import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpajoutComponent } from './empajout.component';

describe('EmpajoutComponent', () => {
  let component: EmpajoutComponent;
  let fixture: ComponentFixture<EmpajoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpajoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
