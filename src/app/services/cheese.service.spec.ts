import {CheeseService} from './cheese.service';

export function main() {
  describe('Cheese Service', () => {
    let cheeseService: CheeseService;

    beforeEach(() => {
      cheeseService = new CheeseService;
    });

    it('should allow cheese retrieval by 1-based index', () => {
      expect(function () {
          cheeseService.get(0);
      }).toThrow();
      let cheese_question = cheeseService.get(1);
      expect(cheese_question).toEqual(jasmine.any(Object));
      expect(cheese_question.options.length).toEqual(4);
    });

    it('should throw and error when an unknown cheese is requested', () => {
      expect(function () {
          cheeseService.get(11);
      }).toThrow();
    });

    it('should check a guess for the cheese name', () => {
        let cheese_question = cheeseService.get(1);
        let guess_result: boolean;
        let correct_answer = cheeseService.getAnswer(cheese_question);
        let expected_result: boolean;
        cheese_question.options.forEach((option) => {
          guess_result = cheeseService.guess(cheese_question, option);
          expected_result = (correct_answer === option);
          expect(guess_result).toBe(expected_result);
        });
    });

  });
}
