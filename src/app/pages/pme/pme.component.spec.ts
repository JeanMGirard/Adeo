import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmeComponent } from './pme.component';

describe('PmeComponent', () => {
  let component: PmeComponent;
  let fixture: ComponentFixture<PmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
