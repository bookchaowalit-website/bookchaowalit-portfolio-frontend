export default function RootLayout({
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
