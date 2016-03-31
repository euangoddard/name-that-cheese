import {GameService} from './game.service';

export function main() {
  describe('Game Service', () => {
    let game: GameService;

    beforeEach(() => {
      game = new GameService;
    });

    it('should initially be at stage 0', () => {
      let initial_stage = game.stage;
      expect(initial_stage).toEqual(0);
    });

    it('should increment the stage by one', () => {
       let next_stage = game.advance();
       expect(next_stage).toEqual(1);
       expect(game.stage).toEqual(1);

       next_stage = game.advance();
       expect(next_stage).toEqual(2);
       expect(game.stage).toEqual(2);
    });

    it('should be able to be reset', () => {
       game.advance();
       game.reset();
       expect(game.stage).toEqual(0);
    });

    it('should report when a game has not started', () => {
      expect(game.is_in_progress()).toBe(false);
      expect(game.is_not_started()).toBe(true);
      expect(game.is_over()).toBe(false);
    });

    it('should report when a game is in progress', () => {
      for (let i=0;i<GameService.MAX_STAGE-1;i++) {
        game.advance();
        expect(game.is_in_progress()).toBe(true);
        expect(game.is_not_started()).toBe(false);
        expect(game.is_over()).toBe(false);
      }
    });

    it('should report when a game is over', () => {
      for (let i=0;i<GameService.MAX_STAGE;i++) {
        game.advance();
      }
      game.advance();
      expect(game.is_in_progress()).toBe(false);
      expect(game.is_not_started()).toBe(false);
      expect(game.is_over()).toBe(true);
    });

    describe('Score', () => {
      it('should initially be zero', () => {
        expect(game.score).toEqual(0);
      });

      it('should be incrementable', () => {
        let newScore = game.incrementScore();
        expect(newScore).toEqual(1);
        expect(game.score).toEqual(1);
      });

      it('should be reset when the game is reset', () => {
        game.incrementScore();
        game.reset();
        expect(game.score).toEqual(0);
      });
    });

  });
}
