export const metadata = {
  title: "Reiss NFL Picks",
  description: "NFL Picks, Survivor, DFS"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0B0B0F" }}>
        {children}
      </body>
    </html>
  )
}
