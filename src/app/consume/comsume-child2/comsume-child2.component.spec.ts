import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComsumeChild2Component } from './comsume-child2.component';

describe('ComsumeChild2Component', () => {
  let component: ComsumeChild2Component;
  let fixture: ComponentFixture<ComsumeChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComsumeChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComsumeChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
