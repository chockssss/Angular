import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformSampleComponent } from './templateform-sample.component';

describe('TemplateformSampleComponent', () => {
  let component: TemplateformSampleComponent;
  let fixture: ComponentFixture<TemplateformSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateformSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateformSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
