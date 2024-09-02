import { Component } from '@angular/core';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrl: './video-gallery.component.scss',
})
export class VideoGalleryComponent {
  videos: string[] = [
    'assets/video/video01.mp4',
    'assets/video/video02.mp4',
    'assets/video/video03.mp4',
    'assets/video/video04.mp4',
    'assets/video/video05.mp4',
    'assets/video/video06.mp4',
    'assets/video/video07.mp4',
  ];
  photos: string[] = [
    'assets/images/about01.jpg',
    'assets/images/about02.jpg',
    'assets/images/about03.jpg',
    'assets/images/about04.jpg',
    'assets/images/about05.jpg',
    'assets/images/about06.jpg',
    'assets/images/about07.jpg',
    'assets/images/about08.jpg',
    'assets/images/about09.jpg',
  ];
  isModalOpen: boolean = false;
  currentVideo: string = '';

  openModal(video: string): void {
    this.currentVideo = video;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.currentVideo = '';
  }
}
