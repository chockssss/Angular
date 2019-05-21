import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestApiSample1Component } from './rest-api-sample1.component';

describe('RestApiSample1Component', () => {
  let component: RestApiSample1Component;
  let fixture: ComponentFixture<RestApiSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestApiSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestApiSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
