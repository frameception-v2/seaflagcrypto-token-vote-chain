import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      message: {
        domain: "seaflagcrypto-token-vote-chain.vercel.app",
        timestamp: 1738784294,
        expirationTime: 1746560294
      },
      signature: "f78ef11186cb99ee5c01d77efa845a67cf03177626830d44fc7500ec47fa96001b791cd6f7636550789d8b25564336a00df1ca21385c920b6410bfd7e9a691541b",
      signingKey: "05188397922a3fdee46560b74d10ad37d5b68b195c21bfc4cb4b016a2b2290f7"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
