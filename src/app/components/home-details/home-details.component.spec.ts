import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeDetailsComponent } from './home-details.component';

describe('HomeDetailsComponent', () => {
  let component: HomeDetailsComponent;
  let fixture: ComponentFixture<HomeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDetailsComponent ],
      imports: [
        MatExpansionModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
