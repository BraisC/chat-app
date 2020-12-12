const users = [];

const addUser = ({ id, username, roomname }) => {
  const name = username.trim().toLowerCase();
  const room = roomname.trim().toLowerCase();

  if (!name || !room) {
    return { error: 'Introduce una sala y nombre' };
  }

  const existingUser = users.find((u) => u.room === room && u.name === name);

  if (existingUser) {
    return { error: 'Ese usuario ya existe en la sala' };
  }

  const user = { id, name, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((u) => u.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

addUser({ id: 22, username: 'Brais', roomname: 'Sala 1' });
addUser({ id: 23, username: 'Brais', roomname: 'Sala 1' });
console.log(removeUser(22));
console.log(users);
