
export class VoteComponent {
  totalVotes = 0;

  upVote(): void {
    this.totalVotes++;
  }

  downVote(): void {
    this.totalVotes--;
  }
}

