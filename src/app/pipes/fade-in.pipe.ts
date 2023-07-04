import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe({
  name: 'fadeIn'
})
export class FadeInPipe implements PipeTransform {

  constructor(private elementRef: ElementRef) {}

  transform(value: any): any {
    if ('IntersectionObserver' in window) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.elementRef.nativeElement.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, options);

      this.elementRef.nativeElement.classList.add('observable');
      observer.observe(this.elementRef.nativeElement);
    } else {
      this.elementRef.nativeElement.style.opacity = 1;
    }

    return value;
  }
}
