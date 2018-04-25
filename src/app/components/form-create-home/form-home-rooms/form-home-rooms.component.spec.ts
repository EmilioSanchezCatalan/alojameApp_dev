import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHomeRoomsComponent } from './form-home-rooms.component';
import { AloCounterModule } from '../../alo-counter/alo-counter.module';

describe('FormHomeRoomsComponent', () => {
  let component: FormHomeRoomsComponent;
  let fixture: ComponentFixture<FormHomeRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHomeRoomsComponent ],
      imports: [AloCounterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHomeRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
