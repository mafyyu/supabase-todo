"use client"; // この行を追加

import React, { use, useEffect, useState } from "react";
import TodoList from "./TodoList";
import { get } from "http";
import { addTodo, getAllTodos } from "@/utils/supabasefunctions";

const TodoApp = () => {
    const [todos, setTodos] = useState<any>([]);
    const [title, setTitle] = useState<string>("");


    useEffect(() => {
        const getTodos = async () => {
            const todos =await getAllTodos();
            setTodos(todos);
            console.log(todos);
        };
        getTodos();
    }, []);
    const handleSubmit =async (e:any)=>{
        e.preventDefault();

        if(title === "") return;

        //todoの追加
        await addTodo(title);
        // let todos = getAllTodos(); 
        const todos = await getAllTodos()
        setTodos(todos);

        setTitle("");
    }
    return <section className="text-center mb-2 text-2xl font-medium">
        <h3>Supabase Todo App</h3>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input 
                type="text"
                className="mr-2 shadow-1g p-1 outline-none"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <button className="shadow-md border-2 px-1 py-1 rounded-1g bg-green-200">Add</button>
        </form>
        <TodoList todos={todos} setTodos = {setTodos}/>
    </section>;
};

export default TodoApp;