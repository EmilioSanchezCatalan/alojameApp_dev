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

  describe('test nextStep()', () => {
    it('should sum +1 at the actual page', () => {
      expect(component.actualStep).toBe(0);
      component.nextStep();
      expect(component.actualStep).toBe(1);
    });
    it('should not sum +1 at the actual page', () => {
      component.actualStep = 8;
      expect(component.actualStep).toBe(8);
      component.nextStep();
      expect(component.actualStep).toBe(8);
    });
  });

  describe('test preStep()', () => {
    it('should res +1 at the actual page', () => {
      component.actualStep = 4;
      expect(component.actualStep).toBe(4);
      component.preStep();
      expect(component.actualStep).toBe(3);
    });
    it('should not res +1 at the actual page', () => {
      expect(component.actualStep).toBe(0);
      component.preStep();
      expect(component.actualStep).toBe(0);
    });
  });

});
