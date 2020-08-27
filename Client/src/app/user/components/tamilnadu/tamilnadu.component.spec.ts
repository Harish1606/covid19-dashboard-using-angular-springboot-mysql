import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilnaduComponent } from './tamilnadu.component';

describe('TamilnaduComponent', () => {
  let component: TamilnaduComponent;
  let fixture: ComponentFixture<TamilnaduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamilnaduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamilnaduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
