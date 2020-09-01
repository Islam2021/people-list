import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPeopleListComponent } from './show-people-list.component';

describe('ShowPeopleListComponent', () => {
  let component: ShowPeopleListComponent;
  let fixture: ComponentFixture<ShowPeopleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPeopleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
