"use client";

import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import { Target, Users, Award, ShieldCheck, Zap, Brain, Laptop, Building2, HeartHandshake } from 'lucide-react';
import { useModal } from '@/components/ClientLayout';

export default function AboutClient() {
  const { openModal } = useModal();

  const coreValues = [
    {
      icon: <Zap className="text-orange-500" size={32} />,
      title: "Skill-Based Learning",
      description: "We focus on what companies actually evaluate — not outdated syllabus."
    },
    {
      icon: <Brain className="text-indigo-600" size={32} />,
      title: "Structured Growth",
      description: "Every student follows a personalized roadmap based on their strengths and gaps."
    },
    {
      icon: <Laptop className="text-indigo-500" size={32} />,
      title: "Practical First Approach",
      description: "Learning by doing — real projects, real preparation."
    },
    {
      icon: <Building2 className="text-slate-700" size={32} />,
      title: "Real Hiring Alignment",
      description: "Everything we teach is aligned with actual interview expectations."
    },
    {
      icon: <HeartHandshake className="text-rose-500" size={32} />,
      title: "Continuous Support",
      description: "We guide and support students until they step into their careers."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-40 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-6xl lg:text-8xl font-bold font-display tracking-tight mb-10 leading-[0.95]">
                Our <br />
                <span className="text-indigo-500">Mission</span> & Values.
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-2xl">
                To make industry-ready tech careers accessible, affordable, and achievable for every fresher.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-900 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-display border border-slate-100">
                  <Target size={14} /> Our Mission
                </div>
                <h2 className="text-5xl font-bold text-slate-900 mb-8 font-display tracking-tight leading-tight">Bridging the Gap Between Learning & Hiring.</h2>
                <div className="space-y-6 text-lg text-slate-500 leading-relaxed font-medium">
                  <p>
                    At Careerxp, we don’t just train—you get access to opportunities.
                  </p>
                  <p>
                    We combine:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Practical, industry-aligned training</li>
                    <li>Direct hiring drives with companies</li>
                    <li>Continuous placement support</li>
                  </ul>
                  <p className="text-slate-900 font-bold">
                  So you’re not just learning…
                  👉 You’re moving towards a job from Day 1
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-indigo-50/60 to-slate-50 shadow-2xl">
                  <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />
                  <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(#4F46E5_1px,transparent_1px)] [background-size:26px_26px]" />

                  <div className="relative p-10 sm:p-12">
                    <div className="flex items-center justify-between gap-6">
                      <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-2xl border border-indigo-200/70 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-indigo-700 backdrop-blur-sm">
                          Mission map
                        </div>
                        <div className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display leading-[1.05]">
                          Learn.
                          <span className="text-indigo-600"> Build.</span>
                          <span className="text-slate-900"> Get hired.</span>
                        </div>
                        <p className="max-w-sm text-sm sm:text-base font-medium text-slate-600 leading-relaxed">
                          Practical training + hiring drives + continuous placement support.
                        </p>
                      </div>

                      <div className="hidden sm:flex shrink-0 flex-col gap-4">
                        <div className="w-44 rounded-3xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                          <div className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
                            Training
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                            <div className="h-full w-[78%] rounded-full bg-indigo-600" />
                          </div>
                        </div>
                        <div className="w-44 rounded-3xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                          <div className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
                            Opportunities
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                            <div className="h-full w-[62%] rounded-full bg-violet-600" />
                          </div>
                        </div>
                        <div className="w-44 rounded-3xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                          <div className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
                            Placement
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                            <div className="h-full w-[70%] rounded-full bg-emerald-600" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
                      {[
                        { label: "Industry-aligned", value: "Practical" },
                        { label: "Hiring drives", value: "Direct" },
                        { label: "Until hired", value: "Support" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-3xl border border-slate-200/80 bg-white/70 p-5 text-center shadow-sm backdrop-blur-sm"
                        >
                          <div className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                            {item.value}
                          </div>
                          <div className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* <div className="absolute -bottom-8 -left-8 p-8 bg-white rounded-3xl shadow-xl border border-slate-100 hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900">IIT Delhi Alumni</div>
                      <div className="text-sm text-slate-500">Founded by Industry Experts</div>
                    </div>
                  </div>
                </div> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">Our Core Values</h2>
              <p className="text-slate-600 max-w-2xl mx-auto font-medium">
                These principles guide everything we do, from curriculum design to student support.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
