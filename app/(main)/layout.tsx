import TopBar from "@/components/TopBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <TopBar />
      <div className="w-full max-h-[80%]">{children}</div>
    </div>
  );
}
