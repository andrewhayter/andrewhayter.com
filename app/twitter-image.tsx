import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Andrew Hayter - Fullstack Engineer";
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
          background:
            "linear-gradient(135deg, #f5f5dc 0%, #d2b48c 25%, #cd853f 50%, #daa520 75%, #f4a460 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated gradient circles */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "15%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,245,220,0.8) 0%, rgba(210,180,140,0.6) 50%, rgba(205,133,63,0.4) 100%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "25%",
            right: "20%",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(218,165,32,0.7) 0%, rgba(244,164,96,0.5) 50%, rgba(222,184,135,0.3) 100%)",
            filter: "blur(30px)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10,
            position: "relative",
          }}
        >
          {/* OH WOW text */}
          <div
            style={{
              fontSize: "48px",
              fontWeight: "900",
              color: "#0f172a",
              textShadow: "0 4px 8px rgba(255,255,255,0.8)",
              marginBottom: "20px",
              letterSpacing: "2px",
              transform: "rotate(-5deg)",
            }}
          >
            OH WOW
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: "900",
              color: "#0f172a",
              textShadow: "0 6px 12px rgba(255,255,255,0.9)",
              marginBottom: "16px",
              letterSpacing: "4px",
            }}
          >
            ANDREW HAYTER
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#0f172a",
              textShadow: "0 3px 6px rgba(255,255,255,0.7)",
              marginBottom: "24px",
              letterSpacing: "2px",
            }}
          >
            FULLSTACK ENGINEER
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#0f172a",
              textShadow: "0 2px 4px rgba(255,255,255,0.6)",
              opacity: 0.8,
            }}
          >
            Building stuff and breaking stuff since 2015
          </div>
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            fontSize: "24px",
            color: "#0f172a",
            opacity: 0.3,
            transform: "rotate(15deg)",
          }}
        >
          ⚡
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "10%",
            fontSize: "24px",
            color: "#0f172a",
            opacity: 0.3,
            transform: "rotate(-15deg)",
          }}
        >
          🔥
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
