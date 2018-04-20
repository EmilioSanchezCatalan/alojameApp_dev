import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStdProfileConfComponent } from './page-std-profile-conf.component';
import { FormAvatarModule } from '../../../../components/form-avatar/form-avatar.module';
import { FormPersonalInfoModule } from '../../../../components/form-personal-info/form-personal-info.module';
import { FormFeatureModule } from '../../../../components/form-feature/form-feature.module';
import { FormSaveModule } from '../../../../components/form-save/form-save.module';

describe('PageStdProfileConfComponent', () => {
  let component: PageStdProfileConfComponent;
  let fixture: ComponentFixture<PageStdProfileConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStdProfileConfComponent ],
      imports: [
        FormAvatarModule,
        FormPersonalInfoModule,
        FormFeatureModule,
        FormSaveModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStdProfileConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
