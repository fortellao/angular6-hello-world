import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilecaseComponent } from './tilecase.component';

describe('TilecaseComponent', () => {
  let component: TilecaseComponent;
  let fixture: ComponentFixture<TilecaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilecaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
