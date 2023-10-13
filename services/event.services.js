const EventsModel = require("../model/event.model");

class EventService {
  static async addEvent(title, description, date, start, end) {
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

  static async getEvent(date) {
    try {
      const eventData = await EventsModel.find({ date });
      return eventData;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EventService;
