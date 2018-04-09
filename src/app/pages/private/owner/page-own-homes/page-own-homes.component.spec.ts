import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageOwnHomesComponent } from './page-own-homes.component';
import { ToolbarOwnerModule } from '../../../../components/toolbar-owner/toolbar-owner.module';
import { GridHomesModule } from '../../../../components/grid-homes/grid-homes.module';

describe('PageOwnHomesComponent', () => {
  let component: PageOwnHomesComponent;
  let fixture: ComponentFixture<PageOwnHomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnHomesComponent ],
      imports: [
        ToolbarOwnerModule,
        GridHomesModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
