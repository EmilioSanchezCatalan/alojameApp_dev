import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressBarModule, MatRadioModule} from '@angular/material';

import { PageOwnHomeCreateComponent } from './page-own-home-create.component';
import { FormCreateHomeModule } from '../../../../../components/form-create-home/form-create-home.module';
import { FormCreateBarModule } from '../../../../../components/form-create-bar/form-create-bar.module';

describe('PageOwnHomeCreateComponent', () => {
  let component: PageOwnHomeCreateComponent;
  let fixture: ComponentFixture<PageOwnHomeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnHomeCreateComponent ],
      imports: [
        MatProgressBarModule,
        MatRadioModule,
        FormCreateHomeModule,
        FormCreateBarModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnHomeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
