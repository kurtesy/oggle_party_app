

import { v4 as uuidv4 } from 'uuid';

export const setLobbyId = text => ({
  type: 'LOBBY_ID',
  id: uuidv4(),
  text
})
