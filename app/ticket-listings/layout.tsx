export default function TicketListingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-6 pb-10">
      <div className="inline-block min-h-screen max-w-6xl justify-center text-center">
        {children}
      </div>
    </section>
  );
}
