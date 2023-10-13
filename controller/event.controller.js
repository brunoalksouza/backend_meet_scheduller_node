const EventService = require("../services/event.services");

exports.addEvent = async (req, res, next) => {
  try {
    const { title, description, date, formatedDate, start, end } = req.body;

    const event = await EventService.addEvent(
      title,
      description,
      date,
      start,
      end
    );

    res.json({ status: true, event });
  } catch (error) {
    throw error;
  }
};

exports.getEvent = async (req, res, next) => {
  try {
    const { date } = req.body;

    const event = await EventService.getEvent(date);

    res.json({ status: true, success: event });
  } catch (error) {
    throw error;
  }
};
