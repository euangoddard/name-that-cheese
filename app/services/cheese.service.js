"use strict";
var CheeseService = (function () {
    function CheeseService() {
        this.CHEESES = [
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
    }
    CheeseService.prototype.get = function (index) {
        var index_zero = index - 1;
        if (index_zero < 0) {
            throw new Error("No cheese for index " + index);
        }
        if (this.CHEESES.length < index) {
            throw new Error("No cheese for index " + index);
        }
        var cheese = this.CHEESES[index_zero];
        var options = [cheese.name].concat(cheese.incorrect_names);
        var cheese_question = {
            index: index_zero,
            image_url: cheese.image_url,
            options: shuffle(options)
        };
        return cheese_question;
    };
    CheeseService.prototype.guess = function (cheese_question, guess) {
        var cheese = this.CHEESES[cheese_question.index];
        return cheese.name === guess;
    };
    CheeseService.prototype.getAnswer = function (cheese_question) {
        return this.CHEESES[cheese_question.index].name;
    };
    return CheeseService;
}());
exports.CheeseService = CheeseService;
function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9jaGVlc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBWUE7SUFBQTtRQUVZLFlBQU8sR0FBYTtZQUN4QjtnQkFDSSxJQUFJLEVBQUUsU0FBUztnQkFDZixlQUFlLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQztnQkFDMUQsU0FBUyxFQUFFLHNCQUFzQjthQUNwQztZQUNEO2dCQUNJLElBQUksRUFBRSxTQUFTO2dCQUNmLGVBQWUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxTQUFTLENBQUM7Z0JBQzVELFNBQVMsRUFBRSxzQkFBc0I7YUFDcEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsZUFBZSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Z0JBQ2xELFNBQVMsRUFBRSxzQkFBc0I7YUFDcEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDO2dCQUN0RCxTQUFTLEVBQUUsc0JBQXNCO2FBQ3BDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO2dCQUNwRCxTQUFTLEVBQUUsc0JBQXNCO2FBQ3BDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osZUFBZSxFQUFFLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUM7Z0JBQ3BELFNBQVMsRUFBRSxzQkFBc0I7YUFDcEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsV0FBVztnQkFDakIsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Z0JBQy9DLFNBQVMsRUFBRSxzQkFBc0I7YUFDcEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsZUFBZSxFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7Z0JBQy9DLFNBQVMsRUFBRSxzQkFBc0I7YUFDcEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsU0FBUztnQkFDZixlQUFlLEVBQUUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztnQkFDckQsU0FBUyxFQUFFLHNCQUFzQjthQUNwQztZQUNEO2dCQUNJLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLGVBQWUsRUFBRSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDO2dCQUNyRCxTQUFTLEVBQUUsdUJBQXVCO2FBQ3JDO1NBQ0osQ0FBQztJQTZCTixDQUFDO0lBM0JHLDJCQUFHLEdBQUgsVUFBSSxLQUFhO1FBQ2IsSUFBSSxVQUFVLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF1QixLQUFPLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF1QixLQUFPLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNELElBQUksZUFBZSxHQUFHO1lBQ2xCLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUM1QixDQUFDO1FBQ0YsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNkJBQUssR0FBTCxVQUFNLGVBQStCLEVBQUUsS0FBYTtRQUNoRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxlQUErQjtRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3BELENBQUM7SUFDTCxvQkFBQztBQUFELENBbEZBLEFBa0ZDLElBQUE7QUFsRlkscUJBQWEsZ0JBa0Z6QixDQUFBO0FBRUQsaUJBQWlCLEtBQVk7SUFDM0IsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxJQUFJLGNBQW1CLENBQUM7SUFDeEIsSUFBSSxXQUFtQixDQUFDO0lBR3hCLE9BQU8sQ0FBQyxLQUFLLFlBQVksRUFBRSxDQUFDO1FBRzFCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN2RCxZQUFZLElBQUksQ0FBQyxDQUFDO1FBR2xCLGNBQWMsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsImZpbGUiOiJhcHAvc2VydmljZXMvY2hlZXNlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIENoZWVzZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGluY29ycmVjdF9uYW1lczogc3RyaW5nW107XG4gICAgaW1hZ2VfdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlZXNlUXVlc3Rpb24ge1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgaW1hZ2VfdXJsOiBzdHJpbmc7XG4gICAgb3B0aW9uczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjbGFzcyBDaGVlc2VTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgQ0hFRVNFUzogQ2hlZXNlW10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdTdGlsdG9uJyxcbiAgICAgICAgICAgIGluY29ycmVjdF9uYW1lczogWydFbW1lbnRhbGVyJywgJ0dvcmdvbnpvbGEnLCAnUm9xdWVmb3J0J10sXG4gICAgICAgICAgICBpbWFnZV91cmw6ICcvYXNzZXRzL2ltYWdlcy8xLmpwZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1JpY290dGEnLFxuICAgICAgICAgICAgaW5jb3JyZWN0X25hbWVzOiBbJ0dvYXRcXCdzIGNoZWVzZScsICdHb3Jnb256b2xhJywgJ0NoZWRkYXInXSxcbiAgICAgICAgICAgIGltYWdlX3VybDogJy9hc3NldHMvaW1hZ2VzLzIuanBnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRW1tZW50YWxlcicsXG4gICAgICAgICAgICBpbmNvcnJlY3RfbmFtZXM6IFsnQ2hlZGRhcicsICdHcnV5ZXJlJywgJ1N0aWx0b24nXSxcbiAgICAgICAgICAgIGltYWdlX3VybDogJy9hc3NldHMvaW1hZ2VzLzMuanBnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRmV0YScsXG4gICAgICAgICAgICBpbmNvcnJlY3RfbmFtZXM6IFsnR29hdFxcJ3MgY2hlZXNlJywgJ1JpY290dGEnLCAnQnJpZSddLFxuICAgICAgICAgICAgaW1hZ2VfdXJsOiAnL2Fzc2V0cy9pbWFnZXMvNC5qcGcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdHb3Jnb256b2xhJyxcbiAgICAgICAgICAgIGluY29ycmVjdF9uYW1lczogWydTdGlsdG9uJywgJ1JpY290dGEnLCAnUm9xdWVmb3J0J10sXG4gICAgICAgICAgICBpbWFnZV91cmw6ICcvYXNzZXRzL2ltYWdlcy81LmpwZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0JyaWUnLFxuICAgICAgICAgICAgaW5jb3JyZWN0X25hbWVzOiBbJ0NhbWVtYmVydCcsICdGZXRhJywgJ01venphcmVsbGEnXSxcbiAgICAgICAgICAgIGltYWdlX3VybDogJy9hc3NldHMvaW1hZ2VzLzYuanBnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQ2FtZW1iZXJ0JyxcbiAgICAgICAgICAgIGluY29ycmVjdF9uYW1lczogWydCcmllJywgJ0NoZWRkYXInLCAnUmljb3R0YSddLFxuICAgICAgICAgICAgaW1hZ2VfdXJsOiAnL2Fzc2V0cy9pbWFnZXMvNy5qcGcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdNb3p6YXJlbGxhJyxcbiAgICAgICAgICAgIGluY29ycmVjdF9uYW1lczogWydGZXRhJywgJ0NoZWRkYXInLCAnUmljb3R0YSddLFxuICAgICAgICAgICAgaW1hZ2VfdXJsOiAnL2Fzc2V0cy9pbWFnZXMvOC5qcGcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdDaGVkZGFyJyxcbiAgICAgICAgICAgIGluY29ycmVjdF9uYW1lczogWydFbW1lbnRhbGVyJywgJ0dydXllcmUnLCAnUmljb3R0YSddLFxuICAgICAgICAgICAgaW1hZ2VfdXJsOiAnL2Fzc2V0cy9pbWFnZXMvOS5qcGcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdHb2F0XFwncyBjaGVlc2UnLFxuICAgICAgICAgICAgaW5jb3JyZWN0X25hbWVzOiBbJ0ZldGEnLCAnTW96emFyZWxsYScsICdHb3Jnb256b2xhJ10sXG4gICAgICAgICAgICBpbWFnZV91cmw6ICcvYXNzZXRzL2ltYWdlcy8xMC5qcGcnXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgZ2V0KGluZGV4OiBudW1iZXIpOiBDaGVlc2VRdWVzdGlvbiB7XG4gICAgICAgIGxldCBpbmRleF96ZXJvID0gaW5kZXggLSAxO1xuICAgICAgICBpZiAoaW5kZXhfemVybyA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY2hlZXNlIGZvciBpbmRleCAke2luZGV4fWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLkNIRUVTRVMubGVuZ3RoIDwgaW5kZXgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY2hlZXNlIGZvciBpbmRleCAke2luZGV4fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNoZWVzZSA9IHRoaXMuQ0hFRVNFU1tpbmRleF96ZXJvXTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBbY2hlZXNlLm5hbWVdLmNvbmNhdChjaGVlc2UuaW5jb3JyZWN0X25hbWVzKTtcbiAgICAgICAgbGV0IGNoZWVzZV9xdWVzdGlvbiA9IHtcbiAgICAgICAgICAgIGluZGV4OiBpbmRleF96ZXJvLFxuICAgICAgICAgICAgaW1hZ2VfdXJsOiBjaGVlc2UuaW1hZ2VfdXJsLFxuICAgICAgICAgICAgb3B0aW9uczogc2h1ZmZsZShvcHRpb25zKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY2hlZXNlX3F1ZXN0aW9uO1xuICAgIH1cblxuICAgIGd1ZXNzKGNoZWVzZV9xdWVzdGlvbjogQ2hlZXNlUXVlc3Rpb24sIGd1ZXNzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGNoZWVzZSA9IHRoaXMuQ0hFRVNFU1tjaGVlc2VfcXVlc3Rpb24uaW5kZXhdO1xuICAgICAgICByZXR1cm4gY2hlZXNlLm5hbWUgPT09IGd1ZXNzO1xuICAgIH1cblxuICAgIGdldEFuc3dlcihjaGVlc2VfcXVlc3Rpb246IENoZWVzZVF1ZXN0aW9uKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ0hFRVNFU1tjaGVlc2VfcXVlc3Rpb24uaW5kZXhdLm5hbWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaHVmZmxlKGFycmF5OiBhbnlbXSk6IGFueVtdIHtcbiAgbGV0IGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aDtcbiAgbGV0IHRlbXBvcmFyeVZhbHVlOiBhbnk7XG4gIGxldCByYW5kb21JbmRleDogbnVtYmVyO1xuXG4gIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcblxuICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XG4gICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcbiAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cbiJdfQ==
