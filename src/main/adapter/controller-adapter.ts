import { Request, Response } from 'express'

import { Controller } from "../../application/contracts/controller";

export const controllerAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => { 
    const response = await controller.run({
      body: req.body
    })

    return res.status(response.statusCode).json(response.body)
  }
}