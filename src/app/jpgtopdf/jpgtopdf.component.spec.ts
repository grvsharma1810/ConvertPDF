import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpgToPdfComponent} from "./jpgtopdf.component";

describe('JpgToPdfComponent', () => {
  let component: JpgToPdfComponent;
  let fixture: ComponentFixture<JpgToPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpgToPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpgToPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
