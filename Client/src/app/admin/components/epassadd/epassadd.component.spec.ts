import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpassaddComponent } from './epassadd.component';

describe('EpassaddComponent', () => {
  let component: EpassaddComponent;
  let fixture: ComponentFixture<EpassaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpassaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpassaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
