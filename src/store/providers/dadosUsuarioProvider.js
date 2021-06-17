const initialState = {
  token: '',
  username: '',
  roles: [],
  timestamp: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'setToken':
      return { ...state, token: action.payload.token }
      break
    case 'setUsername':
      return { ...state, username: action.payload.username }
      break
    case 'setRoles':
      return { ...state, roles: action.payload.roles }
      break
    case 'setTimestamp':
      return { ...state, timestamp: action.payload.timestamp }
      break
  }

  return state
}
