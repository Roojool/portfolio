import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rujul Talekar — AI Researcher × Systems Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#090a0f",
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          padding: "60px 80px",
          color: "#f1f5f9",
          fontFamily: "system-ui, -apple-system, sans-serif",
          border: "12px solid #1e2235",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              borderRadius: "6px",
              backgroundColor: "rgba(6, 182, 212, 0.12)",
              border: "1px solid rgba(6, 182, 212, 0.4)",
              color: "#38bdf8",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
              }}
            />
            <span>RESEARCH & SYSTEMS DOSSIER</span>
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "#64748b",
              fontFamily: "monospace",
            }}
          >
            VIT PUNE · INDIA
          </div>
        </div>

        {/* Center Identity */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 800,
              letterSpacing: "-2px",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            Rujul Talekar
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#94a3b8",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span>AI Researcher</span>
            <span style={{ color: "#06b6d4" }}>×</span>
            <span>Systems Builder</span>
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#64748b",
              maxWidth: "800px",
              lineHeight: 1.5,
              marginTop: "8px",
            }}
          >
            Human-Centered AI · Video Management Systems · Edge Video Analytics · Cellular Transport Dynamics
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1e2235",
            paddingTop: "24px",
            fontSize: "16px",
            color: "#64748b",
            fontFamily: "monospace",
          }}
        >
          <div>Configured State Is Not Wire Behavior</div>
          <div style={{ color: "#38bdf8" }}>github.com/Roojool</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
