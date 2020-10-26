const lobby = (state = [], action) => {
    switch (action.type) {
      case 'START':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            status: true
          }
        ]
      case 'END':
        return [
            ...state,
          {
            status: false
          }
        ]
      default:
        return state
    }
  }
  
  export default lobby;
