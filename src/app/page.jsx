import Hero from "@/components/Hero";
import PublicNav from "@/components/PublicNav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PublicNav />
      <Hero />
      <div className="container mx-auto px-4 py-12">
        {/* Additional content */}
      </div>
    </main>
  );
}
