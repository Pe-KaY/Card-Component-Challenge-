import { Component, ElementRef, ViewChild } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@ViewChild('container') container!: ElementRef
@ViewChild('catheader') header!: ElementRef



  @Input() category!: string
  @Input() title!: string
  @Input() description!: string
  @Input() button!: string
  @Input() image!: string

 
}
