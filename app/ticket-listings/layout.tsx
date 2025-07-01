export default function TicketListingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-6 pb-10">
      <div className="inline-block max-w-6xl text-center justify-center min-h-screen">
        {children}
      </div>
    </section>
  );
}
