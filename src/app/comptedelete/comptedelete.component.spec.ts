import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptedeleteComponent } from './comptedelete.component';

describe('ComptedeleteComponent', () => {
  let component: ComptedeleteComponent;
  let fixture: ComponentFixture<ComptedeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptedeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
