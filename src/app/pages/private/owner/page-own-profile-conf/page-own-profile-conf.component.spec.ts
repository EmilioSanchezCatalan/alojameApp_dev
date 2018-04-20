import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOwnProfileConfComponent } from './page-own-profile-conf.component';
import { FormAvatarModule } from '../../../../components/form-avatar/form-avatar.module';
import { FormPersonalInfoModule } from '../../../../components/form-personal-info/form-personal-info.module';
import { FormOwnerInfoModule } from '../../../../components/form-owner-info/form-owner-info.module';
import { FormSaveModule } from '../../../../components/form-save/form-save.module';

describe('PageOwnProfileConfComponent', () => {
  let component: PageOwnProfileConfComponent;
  let fixture: ComponentFixture<PageOwnProfileConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnProfileConfComponent ],
      imports: [
        FormAvatarModule,
        FormPersonalInfoModule,
        FormOwnerInfoModule,
        FormSaveModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnProfileConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
