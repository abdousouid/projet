import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientreadComponent } from './clientread.component';

describe('ClientreadComponent', () => {
  let component: ClientreadComponent;
  let fixture: ComponentFixture<ClientreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
