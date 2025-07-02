export default function EventDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block text-center justify-center min-h-screen w-full">
        {children}
      </div>
    </section>
  );
}
