import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLhomesComponent } from './page-lhomes.component';

describe('PageLhomesComponent', () => {
  let component: PageLhomesComponent;
  let fixture: ComponentFixture<PageLhomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLhomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLhomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
