import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserValorationsComponent } from './user-valorations.component';

describe('UserValorationsComponent', () => {
  let component: UserValorationsComponent;
  let fixture: ComponentFixture<UserValorationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserValorationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserValorationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
