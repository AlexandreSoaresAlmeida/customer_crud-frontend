import { combineReducers } from 'redux'
import dadosUsuarioProvider from './dadosUsuarioProvider.js'

export default combineReducers({
  dadosUsuario: dadosUsuarioProvider,
})
