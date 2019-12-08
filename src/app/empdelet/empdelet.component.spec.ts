import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdeletComponent } from './empdelet.component';

describe('EmpdeletComponent', () => {
  let component: EmpdeletComponent;
  let fixture: ComponentFixture<EmpdeletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpdeletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
