import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tasks : [],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addtasks: (state,action) => {
            state.tasks.push({id:Date.now(), text: action.payload, completed:false})
        },
        toggleTasks: (state,action) => {
            const task  = state.tasks.find((t) => t.id === action.payload);
            if(task) task.completed = !task.completed
        },
        deleteTasks: (state,action) => {
            state.tasks = state.tasks.filter((t)=> t.id !== action.payload)
        }
    }
})
export const {addtasks,toggleTasks,deleteTasks} = tasksSlice.actions;
export default tasksSlice.reducer