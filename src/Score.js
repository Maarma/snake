class Score {

    score = 0;
    highScore = 0;

    constructor () {
        this.updateScore();
        const highScore = localStorage.getItem('snake-high-score')
        if ( highScore ) {
            this.highScore = highScore;
        }
        this.updateHighScore();
    }

    incrementScore() {
        this.score++;
    }

    updateScore () {
        const scoreDiv = document.getElementById('score');
        scoreDiv.innerText = this.score;
    }

    updateHighScore () {
        const highScoreDiv = document.getElementById('high-score');
        highScoreDiv.innerText = this.highScore;
    }

    saveHighScore () {
        if (this.score > this.highScore ){
        localStorage.setItem('snake-high-score', this.score);
        }
    }
}
export { Score}