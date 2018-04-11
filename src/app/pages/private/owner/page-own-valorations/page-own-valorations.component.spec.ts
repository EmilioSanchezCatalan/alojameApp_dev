import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageOwnValorationsComponent } from './page-own-valorations.component';
import { ToolbarOwnerModule } from '../../../../components/toolbar-owner/toolbar-owner.module';
import { ListValorationsModule } from '../../../../components/list-valorations/list-valorations.module';
import { AloPaginationModule } from '../../../../components/alo-pagination/alo-pagination.module';

describe('PageOwnValorationsComponent', () => {
  let component: PageOwnValorationsComponent;
  let fixture: ComponentFixture<PageOwnValorationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnValorationsComponent ],
      imports: [
        RouterTestingModule,
        ToolbarOwnerModule,
        ListValorationsModule,
        AloPaginationModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnValorationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
