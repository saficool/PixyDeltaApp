import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideIconbarComponent } from './side-iconbar.component';

describe('SideIconbarComponent', () => {
  let component: SideIconbarComponent;
  let fixture: ComponentFixture<SideIconbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideIconbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideIconbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
