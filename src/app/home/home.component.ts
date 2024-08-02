import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    slideInAnimation
  ]
})
export class HomeComponent {
  constructor(private contexts: ChildrenOutletContexts) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
