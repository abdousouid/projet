import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteupdateComponent } from './compteupdate.component';

describe('CompteupdateComponent', () => {
  let component: CompteupdateComponent;
  let fixture: ComponentFixture<CompteupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
