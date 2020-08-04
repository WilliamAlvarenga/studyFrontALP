import { PlatformDetectorService } from './../../../core/plataform-detector/platform-detector.service';
import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private plataformDetector: PlatformDetectorService){}

  ngOnInit(): void {
    if (this.plataformDetector.isPlatformBrowser) {
      this.element.nativeElement.click();
        }
  }

}
