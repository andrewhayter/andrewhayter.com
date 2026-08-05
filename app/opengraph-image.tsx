import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Andrew Hayter - Product Engineer, Content Systems & AI-Era Growth";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F6F4EF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "90px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: 500,
            letterSpacing: "3px",
            color: "#161513",
            opacity: 0.55,
            marginBottom: "28px",
            textTransform: "uppercase",
          }}
        >
          Andrew Hayter
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#161513",
            lineHeight: 1.15,
            maxWidth: "920px",
          }}
        >
          Product Engineer — Content Systems & AI-Era Growth
        </div>
        <div
          style={{
            marginTop: "36px",
            fontSize: "26px",
            color: "#161513",
            opacity: 0.65,
          }}
        >
          9+ years · Next.js · TypeScript · PostgreSQL
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
