import Navigation from "@/components/Navigation";

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
  return (
    <div className="min-h-screen flex">
      {/* Sidebar navigation */}
      <aside className="w-64 flex-shrink-0 bg-content1 border-r border-divider">
        <div className="p-4">
          <div>
            <Navigation />
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-4 h-screen">{children}</main>
    </div>
  );
}
