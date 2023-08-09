import { NextFunction, Request, Response } from "express";
import { EventUseCase } from "../useCases/EventUseCase";

export class EventController {
  constructor(private eventUseCase: EventUseCase) {}

  async create(req: Request, res: Response, next: NextFunction) {
    const eventData = req.body;
    try {
      const createEvent = await this.eventUseCase.create(eventData);
      return res.status(201).json({ message: "Evento Criado Com Sucesso!" });
    } catch (error) {
      next(error);
    }
  }
}
