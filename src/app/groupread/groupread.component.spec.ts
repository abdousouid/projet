import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupreadComponent } from './groupread.component';

describe('GroupreadComponent', () => {
  let component: GroupreadComponent;
  let fixture: ComponentFixture<GroupreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
