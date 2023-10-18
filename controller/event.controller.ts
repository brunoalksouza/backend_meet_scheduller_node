import { Request, Response, NextFunction } from "express";
import EventService from "../services/event.services";

export const addEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, date, start, end } = req.body;

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

export const getEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { date } = req.body;

    const event = await EventService.getEvent(date);

    res.json({ status: true, success: event });
  } catch (error) {
    throw error;
  }
};
