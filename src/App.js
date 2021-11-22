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
            let dotsU = [...init.snakeDots];
            let headU = dotsU[dotsU.length - 1];
            headU= [headU[0], headU[1] -2 ];
            dotsU.push(headU);
            dotsU.shift();
            dispatch({
              type:"MOVE_SNAKE",
              dots:dotsU
            })
            dispatch({
              type: "UP"
            });
            // moveSnake()
            break;
          case 40:
            let dotsD = [...init.snakeDots];
            let headD = dotsD[dotsD.length - 1];
            headD = [headD[0], headD[1] + 2];
            dotsD.push(headD);
            dotsD.shift();
            dispatch({
              type:"MOVE_SNAKE",
              dots:dotsD
            })
            dispatch({
              type: "DOWN"
            });
            // moveSnake()
            break;
          case 37:
            let dotsL = [...init.snakeDots];
            let headL = dotsL[dotsL.length - 1];
            headL = [headL[0] - 2, headL[1]];
            dotsL.push(headL);
            dotsL.shift();
            dispatch({
              type:"MOVE_SNAKE",
              dots:dotsL
            })
            dispatch({
              type: "LEFT"
            });
            // moveSnake()
            break;
          case 39:
            let dotsR = [...init.snakeDots];
            let headR = dotsR[dotsR.length - 1];
            headR = [headR[0] + 2, headR[1]];
            dotsR.push(headR);
            dotsR.shift();
            dispatch({
              type:"MOVE_SNAKE",
              dots:dotsR
            })
            dispatch({
              type: "RIGHT"
            });
            // moveSnake()
            break;
        default:
            break;
        }
      
      }
    
    //  const moveSnake = () => {
    //     let dots = [...init.snakeDots];
    //     let head = dots[dots.length - 1];
    //     let direction = init.direction
    //     switch (direction) {
    //       case 'RIGHT':
    //         console.log("into", direction)
    //         head = [head[0] + 2, head[1]];
    //         break;
    //       case 'LEFT':
    //         console.log("into", direction)
    //         head = [head[0] - 2, head[1]];
    //         break;
    //       case 'DOWN':
    //         console.log("into", direction)
    //         head = [head[0], head[1] + 2];
    //         break;
    //       case 'UP':
    //         console.log("into", direction)
    //         head = [head[0], head[1] - 2];
    //         break;
    //     default:
    //         break;
    //     }
    //     dots.push(head);
    //     dots.shift();
    //     dispatch({
    //       type:"MOVE_SNAKE",
    //       dots
    //     })
    //     // setinit((prev) => ({
    //     //     ...prev,
    //     //     snakeDots: dots
    //     // }));
      
    //   }
    
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
