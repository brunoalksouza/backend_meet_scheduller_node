const EventService = require("../services/event.services");

exports.addEvent = async (req, res, next) => {
  try {
    const { title, description, date, formatedDate, start, end } = req.body;

    const event = await EventService.addEvent(
      title,
      description,
      date,
      formatedDate,
      start,
      end
    );

    res.json({ status: true, event });
  } catch (error) {
    throw error;
  }
};
