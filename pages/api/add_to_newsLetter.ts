import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.setHeader("Allow", "POST").status(405).json({});
  }
  res.status(200).end();

  const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;
  const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
  const email = req.body.email;

  if (!MAILERLITE_GROUP_ID || !MAILERLITE_API_KEY) {
    return res.status(500).json({
      error: "no environmental data",
    });
  }

  if (typeof email !== "string") {
    return res.status(400).json({});
  }
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "X-MailerLite-ApiKey": MAILERLITE_API_KEY,
    },
    body: JSON.stringify({
      email: email,
    }),
  };
  const response = await fetch(
    `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`,
    options
  );
  if (!response.ok) {
    return res.status(500).json({
      error: "problem adding to the list",
    });
  }
  return res.status(201).json({});
}
