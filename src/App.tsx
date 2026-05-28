import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { inject } from "@vercel/analytics";
import logo from "@/assets/klerova-logo.png";

inject();

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="klevora-theme">
      <Toaster />
      <Sonner />

      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          
          <img
            src={logo}
            alt="Klevora Logo"
            className="w-24 h-24 mx-auto mb-8 object-contain"
          />

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Under Maintenance
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl mb-8 leading-relaxed">
            We’re currently upgrading the experience and will be back shortly.
            Thank you for your patience.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-zinc-800 bg-zinc-900">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            
            <span className="text-sm text-zinc-300">
              Klevora will be back shortly.
            </span>
          </div>

          <p className="mt-10 text-sm text-zinc-500">
            © 2026 Klevora. All rights reserved.
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
