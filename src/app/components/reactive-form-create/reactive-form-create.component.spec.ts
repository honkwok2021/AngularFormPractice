import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCreateComponent } from './reactive-form-create.component';

describe('ReactiveFormCreateComponent', () => {
  let component: ReactiveFormCreateComponent;
  let fixture: ComponentFixture<ReactiveFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
