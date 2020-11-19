import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdftojpgComponent } from './pdftojpg.component';

describe('PdftojpgComponent', () => {
  let component: PdftojpgComponent;
  let fixture: ComponentFixture<PdftojpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdftojpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdftojpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
