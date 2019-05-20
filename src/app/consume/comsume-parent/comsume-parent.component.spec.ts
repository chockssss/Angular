import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComsumeParentComponent } from './comsume-parent.component';

describe('ComsumeParentComponent', () => {
  let component: ComsumeParentComponent;
  let fixture: ComponentFixture<ComsumeParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComsumeParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComsumeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
