import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStorageComponent } from './list-storage.component';

describe('ListStorageComponent', () => {
  let component: ListStorageComponent;
  let fixture: ComponentFixture<ListStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
