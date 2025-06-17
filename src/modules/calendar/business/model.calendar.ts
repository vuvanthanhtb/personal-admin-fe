export interface AddEventRequest {
  nameEvent: string;
  startDate: string | Date;
  endDate: string | Date;
}

export interface CalendarEvent {
  start: string | Date;
  end: string | Date;
  // Add other properties if needed
}
