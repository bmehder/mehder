'use strict';
//Fake the namespace
//Use const so "our global" object doesn't get mutated
const js3t = {
  //Constructor for the player objects
  Player: function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;

    return this;
  },

  //Constructor for the match
  //Props:
  //	scoreboard	= reference to the DOM element to display the score
  //	players		= an array of 2 player objects
  //	points		= an array of the current game's points
  //	p1SetsWon	= the number of sets won by player 1
  //	p1SetsWon	= the number of sets won by player 2	// Make p1SetsWon & p1SetsWon one []?
  //	currentSet	= keep track of which set is being played (scored)
  //	sets		= an array of sets containing the each set's game score

  Match: function(p1, p2) {
    this.scoreboard = document.getElementById('scoreboard');
    this.players = [p1, p2];
    this.points = ['0', '0'];
    this.p1SetsWon = 0;
    this.p2SetsWon = 0;
    this.currentSet = 1;
    this.sets = [
      { p1Games: 0, p2Games: 0 },
      { p1Games: 0, p2Games: 0 },
      { p1Games: 0, p2Games: 0 }
    ];
    // Intitially display the new scoreboard.
    rubber.display();

    //Score point method
    this.scorePoint = winner => {
      //Is it deuce or ad?
      if (this.points[0] <= '40' && this.points[1] <= '40') {
        //Then, is it specifically deuce?
        if (this.points[0] === '40' && this.points[1] === '40') {
          this.points[winner] = 'Ad';
        }

        //Increment the score for the winner.
        switch (this.points[winner]) {
          case '0':
            this.points[winner] = '15';
            break;
          case '15':
            this.points[winner] = '30';
            break;
          case '30':
            this.points[winner] = '40';
            break;
          case '40':
            console.log(`Player ${winner + 1} wins the game!`);
            //Score the game for the winner.
            this.scoreGame(winner);
            break;
          default:
          // code block
        }
      } else if (this.points[0] === 'Ad' && this.points[1] === '40') {
        //Logic for deuce
        if (winner === 0) {
          console.log('Player 1 wins the game!');
          this.scoreGame(winner);
        } else {
          this.points[0] = '40';
        }
      } else if (this.points[0] === '40' && this.points[1] === 'Ad') {
        if (winner === 0) {
          this.points[1] = '40';
        } else {
          console.log('Player 2 wins the game!');
          this.scoreGame(winner);
        }
      }

      rubber.display();
    };

    //Score game method
    this.scoreGame = winner => {
      //reset last game points to 0,0
      this.points = ['0', '0'];

      //Get the game score for both players in the current set.
      let p1 = this.sets[this.currentSet - 1].p1Games;
      let p2 = this.sets[this.currentSet - 1].p2Games;

      //If player 1 won the game
      if (winner === 0) {
        if (p1 === 5 && p2 <= 4) {
          this.sets[this.currentSet - 1].p1Games++;
          this.scoreSet(winner);
        } else if (p1 === 6 && p2 <= 5) {
          this.sets[this.currentSet - 1].p1Games++;
          this.scoreSet(winner);
        } else if (p1 > 6 && p2 < 6) {
          this.sets[this.currentSet - 1].p1Games++;
          this.scoreSet(winner);
        } else {
          this.sets[this.currentSet - 1].p1Games++;
          if (
            this.sets[this.currentSet - 1].p1Games === 6 &&
            this.sets[this.currentSet - 1].p2Games === 6
          ) {
            console.log('Tiebreak!');
            this.tiebreak();
          }
        }
      } else {
        //If player 2 won the game
        if (p2 === 5 && p1 <= 4) {
          this.sets[this.currentSet - 1].p2Games++;
          this.scoreSet(winner);
        } else if (p2 === 6 && p1 <= 5) {
          this.sets[this.currentSet - 1].p2Games++;
          this.scoreSet(winner);
        } else if (p2 > 6 && p1 < 5) {
          this.sets[this.currentSet - 1].p2Games++;
          this.scoreSet(winner);
        } else {
          this.sets[this.currentSet - 1].p2Games++;
          if (
            this.sets[this.currentSet - 1].p1Games === 6 &&
            this.sets[this.currentSet - 1].p2Games === 6
          ) {
            console.log('Tiebreak!');
            this.tiebreak();
          }
        }
      }
    };

    //Score set method
    this.scoreSet = winner => {
      console.log('Score Set heard!');
      //Move to the next set.
      this.currentSet++;

      //Increment the number of sets won for the winner.
      if (winner === 0) {
        this.p1SetsWon++;
      } else {
        this.p2SetsWon++;
      }

      // If someone won two sets, complete the match.
      if (this.p1SetsWon > 1 || this.p2SetsWon > 1) {
        this.scoreMatch(winner);
      }
    };

    //Score match method
    this.scoreMatch = winner => {
      console.log('Score Match heard!');

      //Increment the winner so the array index matches the player number.
      alert('Player ' + (winner + 1) + ' won the match!');
    };

    //Tiebreak method
    this.tiebreak = () => {
      console.log('Tiebreak heard!');
      this.scoreGame(0);
      this.scoreSet(0);
    };

    //The view for the score
    (this.view = () => {
      return `
				<table class="table table-striped table-bordered bg-light text-center">
					<tr>
						<th>Players</th>
						<th>Set 1</th>
						<th>Set 2</th>
						<th>Set 3</th>
						<th>Points</th>
					</tr>
					<tr>
						<td>${this.players[0].fullName}</td>
						<td>${this.sets[0].p1Games}</td>
						<td>${this.sets[1].p1Games}</td>
						<td>${this.sets[2].p1Games}</td>
						<td class="font-weight-bolder">${this.points[0]}</td>
					</tr>
					<tr>
						<td>${this.players[1].fullName}</td>
						<td>${this.sets[0].p2Games}</td>
						<td>${this.sets[1].p2Games}</td>
						<td>${this.sets[2].p2Games}</td>
						<td class="font-weight-bolder">${this.points[1]}</td>
					</tr>
				</table>
			`;
    }),
      (this.display = () => (this.scoreboard.innerHTML = this.view()));
  }
};

//Create 2 new player objects
const player1 = new js3t.Player('Roger', 'Federer');
const player2 = new js3t.Player('Rafa', 'Nadal');

// Refactor: Use call() to initialize players from the Match constructor

//Create a new match from the player objects
const rubber = new js3t.Match(player1, player2);
