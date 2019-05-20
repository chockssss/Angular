import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComsumeChild1Component } from './comsume-child1.component';

describe('ComsumeChild1Component', () => {
  let component: ComsumeChild1Component;
  let fixture: ComponentFixture<ComsumeChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComsumeChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComsumeChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
