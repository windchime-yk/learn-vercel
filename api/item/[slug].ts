import { NowRequest, NowResponse } from '@now/node';

export default (req: NowRequest, res: NowResponse) => {
  res.send(`Test Item: ${req.query.slug}`)
}