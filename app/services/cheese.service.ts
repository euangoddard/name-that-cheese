export interface Cheese {
    name: string;
    incorrect_names: string[];
    image_url: string;
}

export interface CheeseQuestion {
    index: number;
    image_url: string;
    options: string[];
}

export class CheeseService {

    private CHEESES: Cheese[] = [
        {
            name: 'Stilton',
            incorrect_names: ['Emmentaler', 'Gorgonzola', 'Roquefort'],
            image_url: '/assets/images/1.jpg'
        },
        {
            name: 'Ricotta',
            incorrect_names: ['Goat\'s cheese', 'Gorgonzola', 'Cheddar'],
            image_url: '/assets/images/2.jpg'
        },
        {
            name: 'Emmentaler',
            incorrect_names: ['Cheddar', 'Gruyere', 'Stilton'],
            image_url: '/assets/images/3.jpg'
        },
        {
            name: 'Feta',
            incorrect_names: ['Goat\'s cheese', 'Ricotta', 'Brie'],
            image_url: '/assets/images/4.jpg'
        },
        {
            name: 'Gorgonzola',
            incorrect_names: ['Stilton', 'Ricotta', 'Roquefort'],
            image_url: '/assets/images/5.jpg'
        },
        {
            name: 'Brie',
            incorrect_names: ['Camembert', 'Feta', 'Mozzarella'],
            image_url: '/assets/images/6.jpg'
        },
        {
            name: 'Camembert',
            incorrect_names: ['Brie', 'Cheddar', 'Ricotta'],
            image_url: '/assets/images/7.jpg'
        },
        {
            name: 'Mozzarella',
            incorrect_names: ['Feta', 'Cheddar', 'Ricotta'],
            image_url: '/assets/images/8.jpg'
        },
        {
            name: 'Cheddar',
            incorrect_names: ['Emmentaler', 'Gruyere', 'Ricotta'],
            image_url: '/assets/images/9.jpg'
        },
        {
            name: 'Goat\'s cheese',
            incorrect_names: ['Feta', 'Mozzarella', 'Gorgonzola'],
            image_url: '/assets/images/10.jpg'
        }
    ];

    get(index: number): CheeseQuestion {
        let index_zero = index - 1;
        if (index_zero < 0) {
            throw new Error(`No cheese for index ${index}`);
        }
        if (this.CHEESES.length < index) {
            throw new Error(`No cheese for index ${index}`);
        }

        let cheese = this.CHEESES[index_zero];
        let options = [cheese.name].concat(cheese.incorrect_names);
        let cheese_question = {
            index: index_zero,
            image_url: cheese.image_url,
            options: shuffle(options)
        };
        return cheese_question;
    }

    guess(cheese_question: CheeseQuestion, guess: string): boolean {
        let cheese = this.CHEESES[cheese_question.index];
        return cheese.name === guess;
    }

    getAnswer(cheese_question: CheeseQuestion): string {
        return this.CHEESES[cheese_question.index].name;
    }
}

function shuffle(array: any[]): any[] {
  let currentIndex = array.length;
  let temporaryValue: any;
  let randomIndex: number;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
