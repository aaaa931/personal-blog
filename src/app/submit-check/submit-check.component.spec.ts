import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCheckComponent } from './submit-check.component';

describe('SubmitCheckComponent', () => {
  let component: SubmitCheckComponent;
  let fixture: ComponentFixture<SubmitCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
