// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line @typescript-eslint/naming-convention
interface Data {
  name: string
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  res.status(200).json({ name: 'John Doe' })
}
