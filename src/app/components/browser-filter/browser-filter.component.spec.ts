import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material';
import { FormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ValidatorErrorService } from '../../services/validator-error.service';
import { BrowserFilterComponent } from './browser-filter.component';

describe('BrowserFilterComponent', () => {
  let component: BrowserFilterComponent;
  let fixture: ComponentFixture<BrowserFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserFilterComponent ],
      imports: [
        FormsModule,
        MatSnackBarModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        ValidatorErrorService,
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test setFilterBrowserStatus()', () => {
    it('should change the state of the var isFilterBrowserVisible', () => {
      expect(component.isFilterBrowserVisible).toBeFalsy();
      component.setFilterBrowserStatus(true);
      expect(component.isFilterBrowserVisible).toBeTruthy();
    });
  });

  describe('test shearchHome()', () => {
    it('should check a form browser and navegate to the next page', inject([FormBuilder], (fb: FormBuilder) => {
      let form_tested: FormGroup = fb.group({
        'address': ['', Validators.required ],
        'city': ['', Validators.required ],
        'typeHome': ['', Validators.required ],
        'nGuest': ['', Validators.required ]
      });
      component.shearchHome(form_tested);

      form_tested = fb.group({
        'address': ['Avd andalucia', Validators.required ],
        'city': ['Jaén', Validators.required ],
        'typeHome': ['Casa', Validators.required ],
        'nGuest': ['6', Validators.required ]
      });
      component.shearchHome(form_tested);
    }));
  });
});
