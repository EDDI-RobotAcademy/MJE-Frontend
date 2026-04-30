export type TimeSlot = "morning" | "afternoon" | "evening";
export type Transport = "walk" | "transit" | "car";

export interface SearchParams {
  place: string;
  timeSlot: TimeSlot | null;
  transport: Transport | null;
}
