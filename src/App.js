import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Snake from './Snake';



function App1() {
    const dispatch = useDispatch()
    const init = useSelector(state => state.snake)
    console.log(init)

    useEffect(() => {
            checkIfOutOfBorders()
    }, [init])

    const onKeyDown = (e) => {
        console.log("Hello")
        e = e || window.event;
        switch (e.keyCode) {
          case 38:
            dispatch({
              type: "UP"
            });
            moveSnake()
            break;
          case 40:
            dispatch({
              type: "DOWN"
            });
            moveSnake()
            break;
          case 37:
            dispatch({
              type: "LEFT"
            });
            moveSnake()
            break;
          case 39:
            dispatch({
              type: "RIGHT"
            });
            moveSnake()
            break;
        default:
            break;
        }
      }
    
     const moveSnake = () => {
        let dots = [...init.snakeDots];
        let head = dots[dots.length - 1];
    
        switch (init.direction) {
          case 'RIGHT':
            head = [head[0] + 2, head[1]];
            break;
          case 'LEFT':
            head = [head[0] - 2, head[1]];
            break;
          case 'DOWN':
            head = [head[0], head[1] + 2];
            break;
          case 'UP':
            head = [head[0], head[1] - 2];
            break;
        default:
            break;
        }
        dots.push(head);
        dots.shift();
        dispatch({
          type:"MOVE_SNAKE",
          dots
        })
        // setinit((prev) => ({
        //     ...prev,
        //     snakeDots: dots
        // }));
      
      }
    
      const checkIfOutOfBorders = () => {
        let head = init.snakeDots[init.snakeDots.length - 1];
        console.log(head)
        if (head[0] >= 100 || head[1] >= 100 || head[0] <0 || head[1] <0) {
            onGameOver();
        }
      }
    
      const onGameOver = () => {
        alert(`Game Over !!!`);
          dispatch({
            type:"RESET"
          })
      }



    return (
    <div>
        <h1>Press on the gaming area to start</h1>
        <div className="game-area" onKeyDown={(e)=>onKeyDown(e)}
            tabIndex="0">
            <Snake snakeDots={init.snakeDots}/>
        </div>
    </div>
    )
}

export default App1
