const { rockPaperScissors } = require('./rockPaperScissors');

describe('rockPaperScissors', () => {
    it('Player 1 deve ganhar caso jogue pedra e Player 2 tesoura', () => {
        expect(rockPaperScissors('rock', 'scissors')).toBe('Player 1 won!');
    });

    it('Player 1 deve ganhar caso jogue papel e Player 2 pedra', () => {
        expect(rockPaperScissors('paper', 'rock')).toBe('Player 1 won!');
    });

    it('Player 1 deve ganhar caso jogue tesoura e Player 2 papel', () => {
        expect(rockPaperScissors('scissors', 'paper')).toBe('Player 1 won!');
    });

    it('Player 2 deve ganhar caso jogue pedra e Player 1 tesoura', () => {
        expect(rockPaperScissors('scissors', 'rock')).toBe('Player 2 won!');
    });

    it('Player 2 deve ganhar caso jogue papel e Player 1 pedra', () => {
        expect(rockPaperScissors('rock', 'paper')).toBe('Player 2 won!');
    });

    it('Player 2 deve ganhar caso jogue tesoura e Player 1 papel', () => {
        expect(rockPaperScissors('paper', 'scissors')).toBe('Player 2 won!');
    });

    it('Player 2 deve empatar com Player 1 caso ambos joguem jogue pedra', () => {
        expect(rockPaperScissors('rock', 'rock')).toBe('Draw!');
    });

    it('Player 2 deve empatar com Player 1 caso ambos joguem jogue papel', () => {
        expect(rockPaperScissors('paper', 'paper')).toBe('Draw!');
    });

    it('Player 2 deve empatar com Player 1 caso ambos joguem jogue tesoura', () => {
        expect(rockPaperScissors('scissors', 'scissors')).toBe('Draw!');
    });
});
