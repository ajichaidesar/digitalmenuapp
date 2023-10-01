import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TestingPage } from './testing.page';

describe('TestingPage', () => {
  let component: TestingPage;
  let fixture: ComponentFixture<TestingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
