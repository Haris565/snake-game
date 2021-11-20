/* eslint-disable import/no-anonymous-default-export */

const initialState = {
    speed:200,
    direction: 'RIGHT',
    snakeDots: [
      [0,0],
      [2,0]
    ]
  }


export default function (state=initialState , action){
    const {type, payload} = action;
    console.log("dots", action.dots)

    switch(type){
        case 'UP':
            return{
                ...state,
                direction:'UP'
            }
        case 'DOWN':
            return{
                ...state,
                direction:'DOWN'
        }
        case 'LEFT':
            return{
                ...state,
                direction:'LEFT'
            }
        case 'RIGHT':
            return{
                ...state,
                direction:'RIGHT'
            }
        case 'MOVE_SNAKE':
            return{
                ...state,
                snakeDots:action.dots
                
            }
        case 'RESET':
            return{
                speed:200,
                direction: 'RIGHT',
                snakeDots: [
                  [0,0],
                  [2,0]
                ]
                
            }
        default:
            return state
    }
}