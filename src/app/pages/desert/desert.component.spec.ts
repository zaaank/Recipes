/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DesertComponent } from './desert.component';

describe('DesertComponent', () => {
  let component: DesertComponent;
  let fixture: ComponentFixture<DesertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
