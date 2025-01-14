import { Client } from "./client";
import { Employee } from "./employee";
import { Organization } from "./organization";

export interface Complaint {
  id: number;
  employee: Employee;
  file: File;
  client: Client;
  date: Date;
  address: string;
  organization: Organization;
}
