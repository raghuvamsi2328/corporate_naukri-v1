import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  private initScrollAnimations(): void {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = this.elementRef.nativeElement.querySelectorAll(
      '.animate-slide-up, .animate-fade-in, .animate-slide-in, .animate-slide-in-right'
    );

    animatedElements.forEach((element: Element) => {
      observer.observe(element);
    });
  }
}
