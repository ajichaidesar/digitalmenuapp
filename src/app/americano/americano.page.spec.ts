import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmericanoPage } from './americano.page';

describe('AmericanoPage', () => {
  let component: AmericanoPage;
  let fixture: ComponentFixture<AmericanoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AmericanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
