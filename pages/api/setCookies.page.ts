import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { accessToken, accessTokenExpireAt, refreshToken, refreshTokenExpireAt } = req.body;

    if (!accessToken || !refreshToken) {
      res.status(400).json({ message: "토큰이 존재하지 않습니다" });
      return;
    }

    const ACCESS_TOKEN_EXPIRE_AT = new Date(accessTokenExpireAt).toUTCString();
    const REFRESH_TOKEN_EXPIRE_AT = new Date(refreshTokenExpireAt).toUTCString();

    res.setHeader("Set-Cookie", [
      `ACCESS_TOKEN=${accessToken}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${ACCESS_TOKEN_EXPIRE_AT}`,
      `REFRESH_TOKEN=${refreshToken}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${REFRESH_TOKEN_EXPIRE_AT}`,
    ]);

    res.status(200).json({ message: "쿠키가 성공적으로 저장되었습니다" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`${req.method} 메소드는 허용되지 않습니다`);
  }
};

export default handler;