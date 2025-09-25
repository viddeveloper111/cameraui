import { io } from 'socket.io-client'

export default io(
  process.env.NODE_ENV === 'development' ? 'https://api.cameraui.ithemes.xyz' : 'https://api.cameraui.ithemes.xyz',
  {
    autoConnect: false,
    //forceNew: true,
    reconnection: true,
    reconnectionDelay: 500,
    maxReconnectionAttempts: Infinity
  }
)
