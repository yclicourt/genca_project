import { Employee } from "./employee";

export interface Organization {
  id: number;
  address: string;
  level: "municipality" | "province" | "nation";
  categoryEmployeeId: Employee;
  denomination: string;
}
