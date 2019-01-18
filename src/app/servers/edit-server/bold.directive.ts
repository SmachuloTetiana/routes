
import { Directive, ElementRef } from '@angular/core';

@Directive ({
    selector: '[bold]'
})

export class BoldDirective {
    constructor(private elem: ElementRef) {
        this.elem.nativeElement.style.fontWeight = "bold";
    }
} 