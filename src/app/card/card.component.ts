import { Component, Input, OnInit } from '@angular/core';
import { BlogPostCard } from '../card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  data!: BlogPostCard;

  constructor() {}

  ngOnInit(): void {}
}
