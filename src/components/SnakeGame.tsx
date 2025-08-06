"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type Point = { x: number; y: number };

const GRID_SIZE = 20; // cells per row/column
const CELL_SIZE = 20; // pixel size of each cell
const CANVAS_SIZE = GRID_SIZE * CELL_SIZE;
const INITIAL_SNAKE: Point[] = [
  { x: 5, y: 5 },
  { x: 4, y: 5 },
  { x: 3, y: 5 },
];

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

/** Generate a food position that does not collide with the given snake */
function randomFood(snake: Point[]): Point {
  let point: Point;
  do {
    point = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((s) => s.x === point.x && s.y === point.y));
  return point;
}

export const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Point>(() => randomFood(INITIAL_SNAKE));
  const [dir, setDir] = useState<Direction>(Direction.Right);
  const [gameOver, setGameOver] = useState(false);

  // Arrow‑key handling
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      setDir((prev) => {
        switch (e.key) {
          case "ArrowUp":
            return prev !== Direction.Down ? Direction.Up : prev;
          case "ArrowDown":
            return prev !== Direction.Up ? Direction.Down : prev;
          case "ArrowLeft":
            return prev !== Direction.Right ? Direction.Left : prev;
          case "ArrowRight":
            return prev !== Direction.Left ? Direction.Right : prev;
          default:
            return prev;
        }
      });
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Main game loop
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const newHead: Point = { ...head };
        switch (dir) {
          case Direction.Up:
            newHead.y -= 1;
            break;
          case Direction.Down:
            newHead.y += 1;
            break;
          case Direction.Left:
            newHead.x -= 1;
            break;
          case Direction.Right:
            newHead.x += 1;
            break;
        }

        // Wall collision
        if (
          newHead.x < 0 ||
          newHead.y < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prev;
        }

        // Self collision
        if (prev.some((seg) => seg.x === newHead.x && seg.y === newHead.y)) {
          setGameOver(true);
          return prev;
        }

        const newSnake = [newHead, ...prev];
        // Eat food?
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(randomFood(newSnake));
        } else {
          newSnake.pop(); // remove tail
        }
        return newSnake;
      });
    }, 120); // speed

    return () => clearInterval(interval);
  }, [dir, food, gameOver]);

  // Canvas drawing
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    // Clear background
    ctx.fillStyle = "hsl(var(--background))";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // Food
    ctx.fillStyle = "hsl(var(--destructive))";
    ctx.fillRect(food.x * CELL_SIZE, food.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

    // Snake
    ctx.fillStyle = "hsl(var(--primary))";
    snake.forEach((seg) => {
      ctx.fillRect(seg.x * CELL_SIZE, seg.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    });

    // Game‑over overlay
    if (gameOver) {
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      ctx.fillStyle = "white";
      ctx.font = "bold 20px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Game Over", CANVAS_SIZE / 2, CANVAS_SIZE / 2);
    }
  }, [snake, food, gameOver]);

  // Reset the game
  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(randomFood(INITIAL_SNAKE));
    setDir(Direction.Right);
    setGameOver(false);
  };

  return (
    <div className="flex flex-col items-center py-8 bg-muted/30">
      <h2 className="text-xl font-semibold mb-4 text-foreground">
        Snake Game
      </h2>
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        className="border border-foreground/20 rounded"
      />
      {gameOver && (
        <Button onClick={resetGame} className="mt-4">
          Play Again
        </Button>
      )}
    </div>
  );
};