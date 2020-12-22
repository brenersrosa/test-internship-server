import { Request, Response } from 'express';

import db from '../database/connection';

export default class ClassesController {
  async index(request: Request, response: Response) {
    const users = await db('users')
      .select(['users.*']);

    return response.json(users);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      cpf,
      dateOfBirth,
    } = request.body;
  
    await db('users').insert({
      name,
      cpf,
      dateOfBirth,
    })

    return response.status(201).send();
  }
}
