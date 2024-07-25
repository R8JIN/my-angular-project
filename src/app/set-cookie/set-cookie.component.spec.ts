import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCookieComponent } from './set-cookie.component';

describe('SetCookieComponent', () => {
  let component: SetCookieComponent;
  let fixture: ComponentFixture<SetCookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetCookieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
