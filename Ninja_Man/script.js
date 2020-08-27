console.log('HELLO');
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.world')
    let score = 0
    let lives = 3
    const liveDisplay = document.getElementById('lives')
    const scoreDisplay = document.getElementById('score')
    const width = 28

    // Layout of Ninjaman
    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
      ]

      const squares = []
      /* Legend
        - 0 - sushi
        - 1 - wall
        - 2 - ghost keep
        - 3 - onigiri
        - 4 - empty space
       */ 

      // Create Grid
      const createWorld = () => {
          for(let i = 0; i<layout.length; i++){
              const square = document.createElement('div')
              grid.appendChild(square)
              squares.push(square)

              // Add layout into world
              if(layout[i] === 0) {
                  squares[i].classList.add('sushi')
              } else if(layout[i] === 1) {
                  squares[i].classList.add('wall')
              } else if(layout[i] ===2){
                  squares[i].classList.add('ghostkeep')
              } else if(layout[i] === 3) {
                  squares[i].classList.add('onigiri')
              }
          }
      }
      createWorld()


      // Starting positon of ninja
      let ninjamanStartingIndex = 490

      squares[ninjamanStartingIndex].classList.add('ninjaman')

      // Move Controls of Pac-man
      const moveNinjaMan = e => {
          squares[ninjamanStartingIndex].classList.remove('ninjaman')
          switch (e.keyCode) {
              case 37:
                  if(
                      ninjamanStartingIndex % width !== 0 &&
                      !squares[ninjamanStartingIndex -1].classList.contains('wall') &&
                      !squares[ninjamanStartingIndex - 1].classList.contains('ghostkeep')
                      ) 
                  ninjamanStartingIndex -=1
                  if(squares[ninjamanStartingIndex -1] === squares[363]){
                      ninjamanStartingIndex = 391
                  }
                  break;
              case 38:
                  if(
                      ninjamanStartingIndex - width >= 0 && 
                      !squares[ninjamanStartingIndex - width].classList.contains('wall') &&
                      !squares[ninjamanStartingIndex - width].classList.contains('ghostkeep')
                      ) 
                  ninjamanStartingIndex -= width
                  break;
              case 39:
                  if(
                      ninjamanStartingIndex % width < width - 1 && 
                      !squares[ninjamanStartingIndex + 1].classList.contains('wall') &&
                      !squares[ninjamanStartingIndex + 1].classList.contains('ghostkeep')
                      ) 
                  ninjamanStartingIndex += 1
                  if(squares[ninjamanStartingIndex + 1] === squares[392]){
                      ninjamanStartingIndex = 364
                  }
                  break
              case 40:
                  if(
                      ninjamanStartingIndex + width < width * width && 
                      !squares[ninjamanStartingIndex + width].classList.contains('wall') &&
                      !squares[ninjamanStartingIndex + width].classList.contains('ghostkeep')
                      ) 
                  ninjamanStartingIndex += width
                  break
              default:
                  break;
          }
          squares[ninjamanStartingIndex].classList.add('ninjaman')
          sushiEaten()
          onigiriEaten()
          gameOver()
          winningGame()

      }
      document.addEventListener('keydown', moveNinjaMan);

      // NinjaMan eats Sushi
      const sushiEaten = () => {
          if(squares[ninjamanStartingIndex].classList.contains('sushi')){
              score++
              console.log(score);
              scoreDisplay.innerHTML = score
              squares[ninjamanStartingIndex].classList.remove('sushi')
          }
      }

      // Ninja Man eats an onigiri
      const onigiriEaten = () => {
          if(squares[ninjamanStartingIndex].classList.contains('onigiri')) {
              score += 10
              ghosts.forEach(ghost => ghost.isScared = true)
              setTimeout(ghostTransition, 10000)
              squares[ninjamanStartingIndex].classList.remove('onigiri')
          }
      }

      // Ghosts Scare Transition
      const ghostTransition = () => {
          ghosts.forEach(ghost => ghost.isScared = false)
      }

      // Create Ghost template
      class Ghost {
          constructor(className, startIdx, speed){
            this.className = className
            this.startIdx = startIdx
            this.speed = speed
            this.currentIdx = startIdx
            this.timerId = NaN
            this.isScared = false
          }
      }

      ghosts = [
          new Ghost('bluey', 348, 250),
          new Ghost('pinky', 376, 400),
          new Ghost('pumpky', 351, 300),
          new Ghost('red', 379, 500)
      ]

      // Draw Ghosts in Keep
      ghosts.forEach(ghost => {
          squares[ghost.currentIdx].classList.add(ghost.className)
          squares[ghost.currentIdx].classList.add('ghost')
      })


      // Function to move ghosts
      const moveGhost = ghost => {
          const directions = [-1,+1,width,-width]
          let direction = directions[Math.floor(Math.random() * directions.length)]


          ghost.timerId = setInterval(function() {
            // Ghost parameters
            if(!squares[ghost.currentIdx + direction].classList.contains('wall') &&
               !squares[ghost.currentIdx + direction].classList.contains('ghost')) {
                    squares[ghost.currentIdx].classList.remove(ghost.className, 'ghost', 'scaredy')
                    ghost.currentIdx += direction
                    squares[ghost.currentIdx].classList.add(ghost.className, 'ghost')
                } else direction = directions[Math.floor(Math.random() *directions.length)]

                if(ghost.isScared){
                    squares[ghost.currentIdx].classList.add('scaredy')
                }

                if(ghost.isScared && squares[ghost.currentIdx].classList.contains('ninjaman')){
                    squares[ghost.currentIdx].classList.remove(ghost.className, 'ghost', 'scaredy')
                    ghost.currentIdx = ghost.startIdx
                    score += 100
                    squares[ghost.currentIdx].classList.add(ghost.className, 'ghost')
                }
                gameOver()
          }, ghost.speed)
      }
      // Move ghosts randomly
      ghosts.forEach(ghost => moveGhost(ghost))

      // Game Over
      const gameOver = () => {
          if(
              squares[ninjamanStartingIndex].classList.contains('ghost') &&
              !squares[ninjamanStartingIndex].classList.contains('scaredy')
          ) {
              lives--
              liveDisplay.innerHTML = lives
          }
          if(lives = 0){
              ghosts.forEach(ghost => clearInterval(ghost.timerId))
              document.removeEventListener('keypress', moveNinjaMan)
              scoreDisplay.innerHTML = 'Game Over'
          }
      }

      const winningGame = () => {
          if(score === 274){
              ghosts.forEach(ghsot => clearInterval(ghost.timerId))
              document.removeEventListener('keypress', moveNinjaMan)
              scoreDisplay.innerHTML = 'You Won!'
          }
      }

})