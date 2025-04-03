<script>
  import Todo from './components/Todo.vue';
  import Header from './components/Header.vue';

  export default {
    components: {
      Todo, Header
    },
    data() {
      return {
        todos: [],
        loading: false
      }
    },
    created() {
      this.loadTodos()
    },
    methods: {
      async loadTodos() {
        this.loading = true
        try {
          const response = await fetch('/api/todo') 
          const todoJson = await response.json()
          // console.log(todoJson)
          this.todos = todoJson
        } catch(err) {
          console.error('Fetch error', err)
        } finally {
          this.loading = false
        }
      },
      async insertTodo(text) {
        // console.log(text)
        try {
          const response = await fetch( '/api/todo/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              text
            })
          })
          if(response.ok) {
            await this.loadTodos()
          }
        } catch(err) {
          console.error('Fetch error', err)
        } 
      },
      async removeTodo(id) {
        // console.log(id)
        try {
          const response = await fetch( `/api/todo/delete/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          if(response.ok) {
            await this.loadTodos()
          }
        } catch(err) {
          console.error('Fetch error', err)
        } 
      },
      async updateDone(id) {
        // console.log(id)
        const todo = this.todos.find(todo => todo.id === id)
        if(todo) {
          todo.done =  !todo.done
            try {
            const response = await fetch( `/api/todo/update/${id}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                title: todo.title,
                done: todo.done
              })
            })
            if(response.ok) {
              await this.loadTodos()
            }
          } catch(err) {
            console.error('Fetch error', err)
          } 
        }

      }
    }
  }
</script>
<template>
  <div id=id>
    <Header @insertTodo="insertTodo" />
    <Todo :todos="todos" @removeTodo="removeTodo" @updateDone="updateDone" />
  </div>
</template>