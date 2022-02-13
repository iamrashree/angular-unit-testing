
import { EventEmitter } from '@angular/core';

export class VoteComponent {
  totalVotes = 0;
  voteChanged = new EventEmitter();

  upVote(): void {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}
