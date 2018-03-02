import { async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import { FormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ValidatorErrorService } from '../../services/validator-error.service';
import { BrowserFilterMovileComponent } from './browser-filter-movile.component';

describe('BrowserFilterMovileComponent', () => {
  let component: BrowserFilterMovileComponent;
  let fixture: ComponentFixture<BrowserFilterMovileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserFilterMovileComponent ],
      imports: [
        FormsModule,
        MatSnackBarModule,
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
    fixture = TestBed.createComponent(BrowserFilterMovileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
