// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getFlags } from '../../services/useData'

type Data = {
  flags: string[] // returns an array of strings that represent feature flags turned ON
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ flags: getFlags()})
}
