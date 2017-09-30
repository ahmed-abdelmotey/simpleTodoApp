
import { ITodoItem } from "./ITodoItem";

export interface ITodoList {
  Id:number,
  Name:string,
  DueDate?: string,
  Tasks?:ITodoItem[]
}