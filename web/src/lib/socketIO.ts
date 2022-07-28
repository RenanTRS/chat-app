import io from 'socket.io-client'

const socket = io(import.meta.env.VITE_URL_SERVER)
const room = 'default'

const connectToRoom = () => {
  socket.emit('join_room', room)
}

export { socket, room, connectToRoom }
