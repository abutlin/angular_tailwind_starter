import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  scores: number[] = [1, 2, 3, 4, 5];
  savedScores: number[] = [];
  sentiment: number = 0;

  trackedScores = signal(0);

  trackScore(index: number) {
    this.sentiment = index;
  }

  storeScore(score: number) {
    this.trackedScores.update(trackedScores => trackedScores + score)
  }

  resetScore() {
    this.trackedScores.set(this.trackedScores() - this.trackedScores());
  }
}
