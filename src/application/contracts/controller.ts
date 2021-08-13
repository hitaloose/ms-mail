import { HttpRequest, HttpResponse } from './http'

export interface Controller {
  run(request: HttpRequest): Promise<HttpResponse>
}