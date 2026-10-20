import { Component, ReactNode } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { CoreServices } from "./components/CoreServices";
import { SupplyManpower } from "./components/SupplyManpower";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-paper p-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
            Something broke on deck — reload the page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="relative bg-paper font-body text-ink">
        <Navbar />
        <main>
          <Home />
          <About />
          <CoreServices />
          <SupplyManpower />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </ErrorBoundary>
  );
}
