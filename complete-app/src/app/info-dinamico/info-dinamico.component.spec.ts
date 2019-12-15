import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDinamicoComponent } from './info-dinamico.component';

describe('InfoDinamicoComponent', () => {
  let component: InfoDinamicoComponent;
  let fixture: ComponentFixture<InfoDinamicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDinamicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
