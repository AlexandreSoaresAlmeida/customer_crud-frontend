import { combineReducers } from 'redux'

import dadosUsuarioProvider from '../providers/dadosUsuarioProvider'

export default combineReducers({
  dadosUsuario: dadosUsuarioProvider,
})
