import Fetch, { Response } from 'node-fetch'
import qs from 'qs'

class Connector {
  constructor(public fetcher: typeof Fetch = Fetch) {}

  fetch: (url: string, props: { body: object }) => Promise<Response> = (
    url: string,
    { body }
  ) =>
    this.fetcher(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        mode: 'cors',
      },
      body: qs.stringify(body),
      method: 'POST',
    })
}
export default Connector
