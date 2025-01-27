export interface Complaint {
  id: number;
  employeeId : number;
  fileId: number;
  clientId: number;
  date: Date;
  address: string;
  organizationId: number;
}
