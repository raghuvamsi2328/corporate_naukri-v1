import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  stats = {
    professionals: 0,
    companies: 0,
    successRate: 0,
    rating: 0
  };

  private isAnimating = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
    this.initStatsObserver();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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

  private initStatsObserver(): void {
    const statsSection = this.elementRef.nativeElement.querySelector('.stats-container');
    
    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isAnimating) {
          // Add visible class for fade-in animation
          entry.target.classList.add('is-visible');
          // Start counter animation after a small delay
          setTimeout(() => {
            this.animateStats();
          }, 200);
        } else if (!entry.isIntersecting) {
          // Reset counters when section is not visible
          this.resetStats();
        }
      });
    }, { 
      threshold: 0.3, // Trigger when 30% of the section is visible
      rootMargin: '0px'
    });

    observer.observe(statsSection);
  }

  private resetStats(): void {
    // Reset all stats to 0
    this.stats.professionals = 0;
    this.stats.companies = 0;
    this.stats.successRate = 0;
    this.stats.rating = 0;

    // Update DOM elements
    const professionalEl = this.elementRef.nativeElement.querySelector('[data-stat="professionals"]');
    const companiesEl = this.elementRef.nativeElement.querySelector('[data-stat="companies"]');
    const successRateEl = this.elementRef.nativeElement.querySelector('[data-stat="successRate"]');
    const ratingEl = this.elementRef.nativeElement.querySelector('[data-stat="rating"]');

    if (professionalEl) professionalEl.textContent = '0';
    if (companiesEl) companiesEl.textContent = '0';
    if (successRateEl) successRateEl.textContent = '0';
    if (ratingEl) ratingEl.textContent = '0.0';
  }

  private animateStats(): void {
    this.animateCounter('professionals', 0, 10000, 2000);
    this.animateCounter('companies', 0, 500, 2000);
    this.animateCounter('successRate', 0, 95, 2000);
    this.animateCounter('rating', 0, 4.8, 2000, true);
  }

  private animateCounter(
    property: keyof typeof this.stats, 
    start: number, 
    end: number, 
    duration: number,
    isDecimal: boolean = false
  ): void {
    this.isAnimating = true;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (end - start) * easeOutQuart;
      
      this.stats[property] = isDecimal ? 
        parseFloat(current.toFixed(1)) : 
        Math.floor(current);

      // Update the DOM
      const element = this.elementRef.nativeElement.querySelector(`[data-stat="${property}"]`);
      if (element) {
        element.textContent = isDecimal ? 
          this.stats[property].toFixed(1) : 
          this.stats[property].toLocaleString();
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        this.isAnimating = false;
      }
    };

    requestAnimationFrame(step);
  }
}
