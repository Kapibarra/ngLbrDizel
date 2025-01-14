import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit, OnDestroy {
  mobile = true;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize(): void {
    if (window && window.innerWidth <= 430) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
    console.log('Is mobile:', this.mobile);
    this.cdr.detectChanges();
  }
}
