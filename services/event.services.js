const EventsModel = require("../model/event.model");

class EventService {
  static async addEvent(title, description, date, formatedDate, start, end) {
    try {
      const createEvent = new EventsModel({
        title,
        description,
        date,
        formatedDate,
        start,
        end,
      });
      return await createEvent.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EventService;
