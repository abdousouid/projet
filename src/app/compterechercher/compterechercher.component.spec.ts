import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompterechercherComponent } from './compterechercher.component';

describe('CompterechercherComponent', () => {
  let component: CompterechercherComponent;
  let fixture: ComponentFixture<CompterechercherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompterechercherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompterechercherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
