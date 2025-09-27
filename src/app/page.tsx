"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Subtle background effects */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header bar */}
      <div className="relative z-10 flex justify-between items-center px-64 py-12 text-white/80 text-sm">
        <div className="absolute left-1/2 transform -translate-x-1/2 text-s text-white/50">STAY ORGANIZED & PRODUCTIVE</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-160px)] px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          {/* Left content */}
          <div className="space-y-2 lg:pr-8 py-4">
            <h1 className="text-4xl lg:text-5xl font-bold leading-relaxed bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent pb-2 animate-fade-in-up">
              Boost your productivity and be the best version of yourself.
            </h1>
            
            <p className="text-lg text-white/65 leading-relaxed animate-fade-in-up animation-delay-200">
              No more procrastinating and never committing, let's get things done together with ToDoListWow!
            </p>

              {/* Login button */}
            <div className="flex flex-col sm:flex-row gap-4 py-6 animate-fade-in-up animation-delay-400">
              <button
                onClick={() => router.push("/login")}
                className={"px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"}
              >
                Log In
              </button>
              {/* Create Account button */}
              <div className="relative group">
                <button
                  onClick={() => router.push("/register")}
                  className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/5"
                >
                  Create Account
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-4 py-2 bg-black/80 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-20">
                  Each account has their own list that you can access anytime
                </div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative lg:pl-4">
            <div className="relative card-rotated transition-all duration-500 animate-fade-in-up animation-delay-600">
              <div className="w-80 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-white/10 p-8 hover:shadow-3xl hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <h3 className="text-white font-semibold">ToDoListWow</h3>
                  </div>
                  
                  <div className="space-y-4 ">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-4 h-4 border-2 border-white/30 rounded"></div>
                      <span className="text-white/80">Complete project proposal</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-4 h-4 border-2 border-white/30 rounded"></div>
                      <span className="text-white/80">Review design mockups</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <div className="w-4 h-4 border-2 border-white/30 rounded"></div>
                      <span className="text-white/80">Update documentation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl scale-110 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-white/10 py-5 px-8">
        <div className="max-w-6xl mx-auto text-center text-white/50 text-sm">
          <p>&copy; Personal Project. Made with ❤️ for productivity yearner.</p>
        </div>
      </div>
    </div>
  );
}
