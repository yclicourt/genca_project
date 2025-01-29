export interface Organization {
  id: number;
  address: string;
  level: "municipality" | "province" | "nation";
  categoryEmployeeId: number;
  denomination: string;
}
