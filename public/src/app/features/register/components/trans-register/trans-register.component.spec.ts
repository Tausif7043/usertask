import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransRegisterComponent } from './trans-register.component';

describe('TransRegisterComponent', () => {
  let component: TransRegisterComponent;
  let fixture: ComponentFixture<TransRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
