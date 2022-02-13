import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    // Arrange
    let totalVotes = null;
    component.voteChanged.subscribe(tv => totalVotes = tv);

    // Act
    component.upVote();

    // Assert
    expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);
  });
});
