import { supabase } from "../utils/supabase";


export const getAllTodos = async () => {
    const { data, error } = await supabase
    .from('todo')
    .select("*");

    if(error) {
        console.error(error)
        throw error    
    }
    
    return data;
};

export const addTodo = async (title: string) => {
    await supabase.from("todo").insert({ title: title });
};

export const deleteTodo = async (id : number) => {
    await supabase.from("todo").delete().eq("id", id);
}


//todos = await supabase.from("todo").select("*");
// return todos.data;