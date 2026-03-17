import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Psicotécnicos Policía";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #fafafa 0%, #f4f4f5 45%, #ffffff 100%)",
          padding: 64,
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 48,
            background:
              "linear-gradient(135deg, rgba(24,24,27,1) 0%, rgba(39,39,42,1) 60%, rgba(24,24,27,1) 100%)",
            boxShadow: "0 30px 120px rgba(24,24,27,0.35)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 72,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: -200,
              background:
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.10), transparent 60%)",
            }}
          />
          <div style={{ position: "relative", display: "flex", gap: 48 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{
                  fontSize: 22,
                  letterSpacing: 6,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  fontWeight: 700,
                }}
              >
                Oposiciones
              </div>
              <div
                style={{
                  fontSize: 72,
                  lineHeight: 1.02,
                  color: "white",
                  fontWeight: 800,
                  letterSpacing: -1.5,
                }}
              >
                Psicotécnicos
                <br />
                Policía
              </div>
              <div
                style={{
                  fontSize: 30,
                  lineHeight: 1.2,
                  color: "rgba(255,255,255,0.78)",
                  maxWidth: 720,
                }}
              >
                Tests por categorías · Corrección instantánea · Explicaciones
              </div>
              <div
                style={{
                  marginTop: 26,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.75)",
                  }}
                />
                <div
                  style={{
                    fontSize: 20,
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  nevao.vercel.app
                </div>
              </div>
            </div>

            <div
              style={{
                marginLeft: "auto",
                width: 340,
                height: 420,
                borderRadius: 44,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                border: "1px solid rgba(255,255,255,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 270,
                  height: 270,
                  borderRadius: 999,
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), rgba(255,255,255,0.06) 55%, transparent 70%)",
                  border: "1px solid rgba(255,255,255,0.16)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

