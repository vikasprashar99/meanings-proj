import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultmodalComponent } from './resultmodal.component';

describe('ResultmodalComponent', () => {
  let component: ResultmodalComponent;
  let fixture: ComponentFixture<ResultmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
