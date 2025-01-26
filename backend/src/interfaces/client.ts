export interface Client {
  id: number;
  client_name: string;
  address: string;
  client_ci: number;
  frecuency?: boolean;
  ocupation: string;
  client_genre: "female" | "male";
  order: string;
}
