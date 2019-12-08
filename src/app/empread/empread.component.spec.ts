import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreadComponent } from './empread.component';

describe('EmpreadComponent', () => {
  let component: EmpreadComponent;
  let fixture: ComponentFixture<EmpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
