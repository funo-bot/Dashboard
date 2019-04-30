import io from 'socket.io-client'

const addr = process.env.NODE_ENV === 'production' ? 'https://bot.funo.io' : 'localhost:3000'
export const socket = io(addr)
