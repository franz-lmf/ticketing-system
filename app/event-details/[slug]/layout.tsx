export default function EventDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block min-h-screen w-full justify-center text-center">
        {children}
      </div>
    </section>
  );
}
