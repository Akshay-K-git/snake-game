import React, { useState, useEffect, useCallback } from 'react';
import './Home.css';

const BOARD_SIZE = 20;  // 20x20 grid
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const DIRECTIONS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

function Home() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(DIRECTIONS.ArrowRight);
  const [food, setFood] = useState(generateFood());
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (isGameOver) return;
    const interval = setInterval(moveSnake, 200);
    document.addEventListener('keydown', handleDirectionChange);
    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleDirectionChange);
    };
  }, [snake, direction, isGameOver]);

  function handleDirectionChange(event) {
    const newDirection = DIRECTIONS[event.key];
    if (newDirection && (newDirection.x !== -direction.x || newDirection.y !== -direction.y)) {
      setDirection(newDirection);
    }
  }

  function moveSnake() {
    const newSnake = [...snake];
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    
    // Collision detection
    if (head.x < 0 || head.y < 0 || head.x >= BOARD_SIZE || head.y >= BOARD_SIZE || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      setIsGameOver(true);
      return;
    }

    newSnake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      setScore(score + 1);
      setFood(generateFood());
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  }

  function generateFood() {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * BOARD_SIZE),
        y: Math.floor(Math.random() * BOARD_SIZE),
      };
      if (!snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) break;
    }
    return newFood;
  }

  function resetGame() {
    setSnake(INITIAL_SNAKE);
    setDirection(DIRECTIONS.ArrowRight);
    setFood(generateFood());
    setScore(0);
    setIsGameOver(false);
  }

  return (
    <div className="App">
      <h1 className='mt-3'><b>Snake Game</b></h1>
      <p>Score: {score}</p>
      <div className="board">
        {Array.from({ length: BOARD_SIZE }).map((_, row) =>
          Array.from({ length: BOARD_SIZE }).map((_, col) => {
            const isSnake = snake.some(segment => segment.x === col && segment.y === row);
            const isFood = food.x === col && food.y === row;
            return (
              <div
                key={`${row}-${col}`}
                className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`}
              />
            );
          })
        )}
      </div>
      {isGameOver && <div className="game-over">Game Over! <button onClick={resetGame} className='btn btn-outline-primary ms-4'>Restart</button></div>}
    </div>
  );
}

export default Home;
