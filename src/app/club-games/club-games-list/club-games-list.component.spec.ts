import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubGamesListComponent } from './club-games-list.component';

describe('ClubGamesListComponent', () => {
  let component: ClubGamesListComponent;
  let fixture: ComponentFixture<ClubGamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubGamesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
