export type Transport = "walk" | "transit" | "car";

export interface SearchParams {
  place: string;
  meetTime: string | null;
  transport: Transport | null;
}
