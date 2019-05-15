import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstCustomComponentComponent } from './my-first-custom-component.component';

describe('MyFirstCustomComponentComponent', () => {
  let component: MyFirstCustomComponentComponent;
  let fixture: ComponentFixture<MyFirstCustomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstCustomComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstCustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
