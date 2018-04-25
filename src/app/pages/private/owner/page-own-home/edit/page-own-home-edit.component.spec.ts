import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOwnHomeEditComponent } from './page-own-home-edit.component';
import { FormEditHomeModule } from '../../../../../components/form-create-home/form-edit-home.module';

describe('PageOwnHomeEditComponent', () => {
  let component: PageOwnHomeEditComponent;
  let fixture: ComponentFixture<PageOwnHomeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnHomeEditComponent ],
      imports: [FormEditHomeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnHomeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
