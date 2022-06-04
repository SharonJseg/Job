import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationNotationComponent } from './application-notation.component';

describe('ApplicationNotationComponent', () => {
  let component: ApplicationNotationComponent;
  let fixture: ComponentFixture<ApplicationNotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationNotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationNotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
