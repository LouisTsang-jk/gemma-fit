export const metadata = {
  title: {
    template: "%s | Gemma Fit",
    default: "Gemma Fit",
  },
  description: "Gemma Fit is a fitness tracker app",
};

/** Root layout component for the view group */
export default function ViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
