import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white">
      <section className="max-w-6xl mx-auto py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Lightning Fast <span className="text-blue-500">Framework</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Build ultra-modern apps with simplicity and speed.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="text-lg px-6 py-3">Get Started</Button>
          <Button variant="outline" className="text-lg px-6 py-3 border-gray-700">
            Learn More
          </Button>
        </div>
      </section>

      <section className="bg-gray-800 py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <Sparkles className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Blazing Speed</h3>
              <p className="text-gray-400">
                Optimized runtime for lightning-fast interactions and minimal overhead.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <Sparkles className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Developer First</h3>
              <p className="text-gray-400">
                Enjoy an intuitive API, great DX, and seamless tooling.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6">
              <Sparkles className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Design</h3>
              <p className="text-gray-400">
                Modular architecture lets you build your way, from small projects to big platforms.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
