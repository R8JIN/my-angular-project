import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMsgComponent } from './form-msg.component';

describe('FormMsgComponent', () => {
  let component: FormMsgComponent;
  let fixture: ComponentFixture<FormMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMsgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
