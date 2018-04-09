import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOwnHomeStudentsComponent } from './page-own-home-students.component';
import { RoomersControlModule } from '../../../../../components/roomers-control/roomers-control.module';
import { RoomersRequestModule } from '../../../../../components/roomers-request/roomers-request.module';

describe('PageOwnHomeStudentsComponent', () => {
  let component: PageOwnHomeStudentsComponent;
  let fixture: ComponentFixture<PageOwnHomeStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOwnHomeStudentsComponent ],
      imports: [
        RoomersControlModule,
        RoomersRequestModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOwnHomeStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
