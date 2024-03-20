import WebService from './webService/webService'

class WebApi {
  protected baseURL: string
  protected service: WebService
  protected timeout = 10000

  constructor(baseURL: string) {
    this.baseURL = baseURL
    this.service = new WebService({
      baseURL,
    })
  }
}

let webApi = null

if (!webApi) {
  webApi = new WebApi(process.env.BACKEND_BASE_URL || 'https://api.dev.hackquest.io/v1/')
}

export default webApi as WebApi
