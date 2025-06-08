import RequestService from "shared/axios";
import { POST } from "shared/constants";
import endpoint from "./endpoint.todo";
import type { CalendarNotifyRequest } from "./model.todo";

class TodoService {
  static instance: TodoService;
  private constructor() {}
  public static getInstance(): TodoService {
    if (!TodoService.instance) {
      TodoService.instance = new TodoService();
    }
    return TodoService.instance;
  }

  triggerN8nEvent = (data: CalendarNotifyRequest) =>
    RequestService.methodRequest(endpoint.calendarNotify, POST, data);
}

export default TodoService.getInstance();
