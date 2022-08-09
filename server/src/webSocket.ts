import { io } from './http'

io.on('connection', (socket) => {
  console.log(socket.id)

  socket.on('join_room', (data) => {
    socket.join(data)
    console.log(`User Joined Room: ${data}`)
  })

  socket.on('send_message', (data) => {
    console.log(data)

    socket.to(data.room).emit('receive_message', data)
  })

  socket.on('typing_message', (data) => {
    console.log(data)
    socket.to(data.room).emit('type_message', data)
  })

  socket.on('disconnect', () => {
    console.log('USER DISCONNECTED', socket.id)
  })
})
