import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMusicianListComponent } from './user-musician-list.component';

describe('UserMusicianListComponent', () => {
  let component: UserMusicianListComponent;
  let fixture: ComponentFixture<UserMusicianListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMusicianListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMusicianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
