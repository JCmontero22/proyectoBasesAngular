import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageDragonBallzComponent } from './main-page-dragon-ballz.component';

describe('MainPageDragonBallzComponent', () => {
  let component: MainPageDragonBallzComponent;
  let fixture: ComponentFixture<MainPageDragonBallzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageDragonBallzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageDragonBallzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
