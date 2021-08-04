import { Todo } from "./todo.class";

export class TodoList {

    constructor(){
        
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ){
        this.todos.push(todo); // se inserta el argumento recibido todo en el arreglo todos
        this.guardarLocalStorege()
    }

    eliminarTodo(id){

        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorege()

    }

    marcarCompletado(id){
        
        for (const todo of this.todos){

            if (todo.id == id){
                
                todo.completado = !todo.completado;
                this.guardarLocalStorege();
                break;
            }
        } 
    }

    eliminarCompletados(){

        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorege()
        
    }

    guardarLocalStorege(){

        localStorage.setItem('todo', JSON.stringify( this.todos ) );
    }

    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo')) 
            ? JSON.parse (localStorage.getItem('todo') )
            : []; 

        // Permite barrer cada uno de los elementos dentro de un arreglo y retorna un nuevo arreglo con cada uno de sus objetos mutado
        this.todos = this.todos.map(obj => Todo.fromJson(obj));
    }
}


