import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadteDashboardComponent } from './upadte-dashboard.component';

describe('UpadteDashboardComponent', () => {
  let component: UpadteDashboardComponent;
  let fixture: ComponentFixture<UpadteDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpadteDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpadteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
