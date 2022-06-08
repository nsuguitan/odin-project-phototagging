import * as React from 'react'
import { useContext } from 'react'

const GameImageContext = React.createContext()

function GameImageReducer(state, action) {
    switch (action.type) {
        case 'SELECT_GAME_1': {
            return {
                imageURL: './images/pokemon-level1.jpeg',
                pokemon:['sudowoodo', 'dratini', 'porygon'],
                docId:'UJXFiADH1PbHgpTIY5cH',
                foundPokemon:[]
            }
        }
        case 'SELECT_GAME_2': {
            return {
                imageURL: './images/pokemon-level2.webp',
                pokemon:['squirtle', 'chansey', 'magikarp'],
                docId:'UJXFiADH1PbHgpTIY5cH',
                foundPokemon:[]
            }
        }
        case 'SELECT_GAME_3': {
            return {
                imageURL: './images/pokemon-level3.jpeg',
                pokemon:['sudowoodo', 'golbat', 'cubone'],
                docId:'UJXFiADH1PbHgpTIY5cH',
                foundPokemon:[]
            }
            
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function GameImageProvider({children}) {
  const [state, dispatch] = React.useReducer(GameImageReducer, {imageURL: ''})
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch}
  return <GameImageContext.Provider value={value}>{children}</GameImageContext.Provider>
}

function useImage(){
    const context = useContext(GameImageContext)
    return context;
}
export {GameImageProvider, useImage}