const server = require('http').createServer();
const io = require('socket.io')(server);


export const connectedUsers = new UserList();
export let messages = {};
let numberUser = 0;

// Conexion de un cliente
export const connectUser = (client: Socket, io: socketIO.Server) => {
    numberUser++;
    const user = new User(client.id, 'user-' + numberUser);
    console.log('User connected:    ' + user.name + ' -> ' + client.id);
    connectedUsers.addUser(user);

    io.emit('active-users', connectedUsers.getList());
};

// Desconectar usuarios
export const disconnected = (client: Socket, io: socketIO.Server) => {
    client.on('disconnect', () => {
        console.log('User disconnected: ', client.id);
        connectedUsers.deleteUser(client.id);

        io.emit('active-users', connectedUsers.getList());
    });
}

// Emitir un mensaje
export const message = (client: Socket, io: socketIO.Server) => {
    client.on('message', (payload: {from: string, body: string}) => {
        console.log('Received message  >| ', payload.body);

        io.emit('new-message', payload);
    });
}

listenSockets= () => {
    this.io.on('connection', client => {

        // Listen Events

        socket.connectUser(client, this.io);

        socket.disconnected(client, this.io);

        socket.message(client, this.io);
    });
}

module.exports = listenSockets;