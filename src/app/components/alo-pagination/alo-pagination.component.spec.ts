import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AloPaginationComponent } from './alo-pagination.component';

describe('AloPaginationComponent', () => {
  let component: AloPaginationComponent;
  let fixture: ComponentFixture<AloPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AloPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloPaginationComponent);
    component = fixture.componentInstance;
    component.actualPage = 5;
    component.totalPage = 10;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test generateListPages()', () => {
    it('should generate a array with length == totalPage', () => {
      expect(component.listPages.length).toBe(component.totalPage);
    });
  });

  describe('test paginedNavigation()', () => {
    it('should emmit the number of page like arg', () => {
      component.paginedNavigation(3);
    });
  });

});
