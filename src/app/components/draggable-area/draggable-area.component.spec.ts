import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableAreaComponent } from './draggable-area.component';

describe('DraggableAreaComponent', () => {
  let component: DraggableAreaComponent;
  let fixture: ComponentFixture<DraggableAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
