import Todos from './api/todos';

async function exec() {
  const todos = new Todos();
  const response = await todos.index();
  console.log(response);
}

exec();
