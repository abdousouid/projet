import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteaddComponent } from './compteadd.component';

describe('CompteaddComponent', () => {
  let component: CompteaddComponent;
  let fixture: ComponentFixture<CompteaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
