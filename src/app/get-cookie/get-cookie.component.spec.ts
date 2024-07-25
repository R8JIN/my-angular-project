import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCookieComponent } from './get-cookie.component';

describe('GetCookieComponent', () => {
  let component: GetCookieComponent;
  let fixture: ComponentFixture<GetCookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCookieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
