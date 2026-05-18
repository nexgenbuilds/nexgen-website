export default function ServicesGrid() {
  return (
    <section id="services" className="w-full pt-10 pb-20 relative z-10">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-jakarta font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight">
          Our Core Offerings
        </h2>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto md:mx-0">
          We build the digital infrastructure that gives your business an unfair advantage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
        {/* Card 1: Web Architecture (Large) */}
        <div className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:border-indigo-500/50 hover:bg-white/10 group relative overflow-hidden flex flex-col justify-start text-left min-h-[350px] md:min-h-[450px]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-500 pointer-events-none" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 text-indigo-400">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-3xl font-jakarta font-bold text-white mb-4">Custom Web Architecture</h3>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              We design and develop high-performance, scalable web applications using Next.js and React. Our cloud-native infrastructure is built to handle millions of requests while maintaining sub-second latency.
            </p>
          </div>
        </div>

        {/* Card 2: Python Automation */}
        <div className="md:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:border-cyan-500/50 hover:bg-white/10 group relative overflow-hidden flex flex-col justify-start items-start text-left min-h-[250px]">
          <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-5 text-cyan-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-jakarta font-bold text-white mb-3">Python Automation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Streamline repetitive tasks and optimize workflows with custom Python scripts and seamless third-party API integrations.
            </p>
          </div>
        </div>

        {/* Card 3: Elite Data Scraping */}
        <div className="md:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/50 hover:bg-white/10 group relative overflow-hidden flex flex-col justify-start items-start text-left min-h-[250px]">
          <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-purple-500/10 blur-[80px] rounded-full group-hover:bg-purple-500/20 transition-all duration-500 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-5 text-purple-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-xl font-jakarta font-bold text-white mb-3">Elite Data Scraping</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Large-scale, reliable data extraction pipelines. We gather actionable intelligence and perform advanced sentiment analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
