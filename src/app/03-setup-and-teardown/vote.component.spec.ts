import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // Arrange
  let component: VoteComponent;

  // test runner will call this before each test ,To avoid the execution of one test impact the execution of the other test.
  beforeEach(() => {
    component =  new VoteComponent();
  });

  // afterEach(() => {})
  // beforeAll(() => {})
  // afterAll(() => {})

  it('should increment totalVotes when upvoted', () => {
    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});
