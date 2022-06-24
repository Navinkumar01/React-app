import { v4 as uuid } from "uuid";


export class Todo{
    constructor(todo, dueDate){
        this.todo = todo;
        this.dueDate = dueDate;
        this.createdAt = new Date().toISOString();
        this.isCompleted = false;
        this.id = uuid();
    
    }
}