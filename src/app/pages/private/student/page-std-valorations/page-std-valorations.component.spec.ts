import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStdValorationsComponent } from './page-std-valorations.component';

describe('PageStdValorationsComponent', () => {
  let component: PageStdValorationsComponent;
  let fixture: ComponentFixture<PageStdValorationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStdValorationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStdValorationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
