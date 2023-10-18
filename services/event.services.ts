import EventsModel, { IEvent } from "../model/event.model";

class EventService {
  static async addEvent(
    title: string,
    description: string,
    date: Date,
    start: string,
    end: string
  ): Promise<IEvent> {
    try {
      const createEvent = new EventsModel({
        title,
        description,
        date,
        start,
        end,
      });
      return await createEvent.save();
    } catch (error) {
      throw error;
    }
  }

  static async getEvent(date: Date): Promise<IEvent[]> {
    try {
      const eventData = await EventsModel.find({ date });
      return eventData;
    } catch (error) {
      throw error;
    }
  }
}

export default EventService;
