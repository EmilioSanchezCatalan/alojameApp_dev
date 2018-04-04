import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarOwnerComponent } from './toolbar-owner.component';

describe('ToolbarOwnerComponent', () => {
  let component: ToolbarOwnerComponent;
  let fixture: ComponentFixture<ToolbarOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
