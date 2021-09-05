import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFilteringComponent } from './category-filtering.component';

describe('CategoryFilteringComponent', () => {
  let component: CategoryFilteringComponent;
  let fixture: ComponentFixture<CategoryFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFilteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
