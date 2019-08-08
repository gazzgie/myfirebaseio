import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeadetailsPage } from './ideadetails.page';

describe('IdeadetailsPage', () => {
  let component: IdeadetailsPage;
  let fixture: ComponentFixture<IdeadetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeadetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeadetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
