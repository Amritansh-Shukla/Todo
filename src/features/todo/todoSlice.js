import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState ={
   todos:[{
      id:1,text:"Go to work"}]
}
//initial state can array or object depends on u
export const todoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {
       addTodo: (state, action) => {
           const todo = {
               id: nanoid(), 
               text: action.payload
           }
           if(todo.text==""){
            alert("Please add the Work detail !!!")
           }
           state.todos.push(todo)
       },
       removeTodo: (state, action) => {
           state.todos = state.todos.filter((todo) => todo.id !== action.payload )
       },
   }
})

export const {addTodo,removeTodo} = todoSlice.actions; 

export default todoSlice.reducer;




//createSlice is method take objects in that object there is two properties name,initialState,reducers:{properties:function}
//(state,action) //state gives what are the values are there in intialstate
//action :- to perform any action some values are needed are taken from action 
