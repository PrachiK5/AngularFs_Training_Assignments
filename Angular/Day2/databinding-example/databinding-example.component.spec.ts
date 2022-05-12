import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingExampleComponent } from './databinding-example.component';

describe('DatabindingExampleComponent', () => {
  let component: DatabindingExampleComponent;
  let fixture: ComponentFixture<DatabindingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
