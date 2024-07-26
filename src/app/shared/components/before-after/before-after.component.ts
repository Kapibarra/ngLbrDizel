import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss'],
})
export class BeforeAfterComponent implements AfterViewInit {
  @ViewChild('sliderRange') sliderRange?: ElementRef;
  @ViewChild('sliderThumb') sliderThumb?: ElementRef;
  @ViewChild('slider') slider?: ElementRef;
  @ViewChild('imageWrapperOverlay') imageWrapperOverlay?: ElementRef;

  ngAfterViewInit() {
    if (
      this.sliderRange &&
      this.sliderThumb &&
      this.slider &&
      this.imageWrapperOverlay
    ) {
      this.init();
    }
  }

  setSliderState(e: Event, element: HTMLElement) {
    const sliderRange = this.sliderRange?.nativeElement;

    if (e.type === 'input') {
      sliderRange.classList.add('image-comparison__range--active');
      return;
    }

    sliderRange.classList.remove('image-comparison__range--active');
    element.removeEventListener('mousemove', this.moveSliderThumb.bind(this));
  }

  moveSliderThumb(e: MouseEvent) {
    const sliderRange = this.sliderRange?.nativeElement;
    const thumb = this.sliderThumb?.nativeElement;
    if (!sliderRange || !thumb) return;

    let position = e.layerY - 20;

    if (e.layerY <= sliderRange.offsetTop) {
      position = -20;
    }

    if (e.layerY >= sliderRange.offsetHeight) {
      position = sliderRange.offsetHeight - 20;
    }

    thumb.style.top = `${position}px`;
  }

  moveSliderRange(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    const slider = this.slider?.nativeElement;
    const imageWrapperOverlay = this.imageWrapperOverlay?.nativeElement;

    if (!slider || !imageWrapperOverlay) return;

    slider.style.left = `${value}%`;
    imageWrapperOverlay.style.width = `${value}%`;

    this.sliderRange?.nativeElement.addEventListener(
      'mousemove',
      this.moveSliderThumb.bind(this)
    );
    this.setSliderState(e, this.sliderRange?.nativeElement);
  }

  init() {
    const sliderRange = this.sliderRange?.nativeElement;

    if (!sliderRange) return;

    if ('ontouchstart' in window === false) {
      sliderRange.addEventListener('mouseup', (e: MouseEvent) =>
        this.setSliderState(e, this.sliderRange?.nativeElement)
      );
      sliderRange.addEventListener(
        'mousedown',
        this.moveSliderThumb.bind(this)
      );
    }

    sliderRange.addEventListener('input', (e: Event) =>
      this.moveSliderRange(e)
    );
    sliderRange.addEventListener('change', (e: Event) =>
      this.moveSliderRange(e)
    );
  }
}
