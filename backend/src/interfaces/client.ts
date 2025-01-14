export interface Client {
  id: number;
  client_name: string;
  address: string;
  client_ci: string;
  frecuency?: boolean;
  ocupation: string;
  client_genre: "female" | "male";
  order: string;
}
