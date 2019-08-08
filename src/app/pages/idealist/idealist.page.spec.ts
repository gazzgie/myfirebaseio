import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealistPage } from './idealist.page';

describe('IdealistPage', () => {
  let component: IdealistPage;
  let fixture: ComponentFixture<IdealistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdealistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdealistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
