import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirerComponent } from './retirer.component';

describe('RetirerComponent', () => {
  let component: RetirerComponent;
  let fixture: ComponentFixture<RetirerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetirerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
