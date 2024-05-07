import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsLoaderComponent } from './icons-loader.component';

describe('IconsLoaderComponent', () => {
  let component: IconsLoaderComponent;
  let fixture: ComponentFixture<IconsLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconsLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
