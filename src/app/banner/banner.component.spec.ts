import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  });

  it('detect changes in banner',()=>{
    fixture = TestBed.createComponent(BannerComponent);
    const component = fixture.componentInstance;
    expect(component.BannerHeading).toEqual('Explore Books on entrepreneurship')
  })

  it('should create', () => {
    fixture = TestBed.createComponent(BannerComponent);
    const component=fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
