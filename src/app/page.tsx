import { Navbar, Hero, Features, Footer } from "@/components";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
