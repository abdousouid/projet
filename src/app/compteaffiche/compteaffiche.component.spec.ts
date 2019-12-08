import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteafficheComponent } from './compteaffiche.component';

describe('CompteafficheComponent', () => {
  let component: CompteafficheComponent;
  let fixture: ComponentFixture<CompteafficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteafficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteafficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
