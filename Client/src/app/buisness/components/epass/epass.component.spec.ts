import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpassComponent } from './epass.component';

describe('EpassComponent', () => {
  let component: EpassComponent;
  let fixture: ComponentFixture<EpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
