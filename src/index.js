import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml (todo) ); // Reconstruccion de los todos en el HTML

console.log('todos', todoList.todos)