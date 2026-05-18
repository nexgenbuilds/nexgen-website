"use client";
import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="w-full pt-24 pb-12 relative z-10">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Copy & CTA */}
                    <div className="flex flex-col justify-start text-left">
                        <h2 className="text-4xl md:text-6xl font-bold font-jakarta text-white tracking-tight mb-6">
                            Let's build your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                                unfair advantage.
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed mb-8">
                            Whether you need elite data scraping, automated Python workflows, or a highly scalable Next.js architecture, we are ready to engineer the solution.
                        </p>
                        <div className="flex items-center gap-4 text-gray-300">
                            <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-lg font-medium">hello@nexgenbuilds.tech</span>
                        </div>
                    </div>

                    {/* Right Side: Premium Glass Form */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

                        <form className="relative z-10 flex flex-col gap-6" action="mailto:hello@nexgenbuilds.tech" method="POST" encType="text/plain">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-400">Project Details</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your data or web architecture needs..."
                                    className="bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none"
                                />
                            </div>

                            <button className="mt-4 w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-gray-200 hover:scale-[1.02] active:scale-95 transition-all duration-300">
                                Initialize Project
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}