import { Auth } from "./auth";

export interface Employee extends Auth {
  id: number;
  name: string;
  lastname: string;
  category: "directive" | "employee";
  genre: "female" | "male";
}
