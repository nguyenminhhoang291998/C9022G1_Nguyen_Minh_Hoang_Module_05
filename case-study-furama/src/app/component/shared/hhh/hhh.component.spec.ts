import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HhhComponent } from './hhh.component';

describe('HhhComponent', () => {
  let component: HhhComponent;
  let fixture: ComponentFixture<HhhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HhhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
