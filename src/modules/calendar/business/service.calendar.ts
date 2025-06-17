import RequestService from "shared/axios";
import { POST } from "shared/constants";
import type { AddEventRequest } from "./model.calendar";
import endpoint from "./endpoint.calendar";

class CalendarService {
  static instance: CalendarService;
  private constructor() {}
  public static getInstance(): CalendarService {
    if (!CalendarService.instance) {
      CalendarService.instance = new CalendarService();
    }
    return CalendarService.instance;
  }

  addEvent = (data: AddEventRequest) =>
    RequestService.methodRequest(endpoint.addEvent, POST, data);

  getEvents = () => RequestService.methodRequest(endpoint.getEvents);
}

export default CalendarService.getInstance();
