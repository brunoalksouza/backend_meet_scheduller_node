// Arquivo "event.model.ts"
import { Document, Model, Schema, connection } from "mongoose";

export interface IEvent extends Document {
  title: string;
  description: string;
  date: string;
  start: string;
  end: string;
}

const eventSchema: Schema<IEvent> = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
});

const EventsModel: Model<IEvent> = connection.model<IEvent>(
  "events",
  eventSchema
);

export default EventsModel;
