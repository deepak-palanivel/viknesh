import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play, CheckCircle, Star } from 'lucide-react';
import { features, stats, testimonials } from '../data/mockData';
import ParticleBackground from '../components/ParticleBackground';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
};

export default function LandingPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <ParticleBackground />

            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 via-transparent to-surface pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-primary-300 mb-8"
                        >
                            <Sparkles className="w-4 h-4" />
                            AI-Powered Interview Preparation
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
                        >
                            <span className="text-white">Ace Your Next</span>
                            <br />
                            <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent animate-gradient">
                                Interview with AI
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            Practice with an AI interviewer that adapts to your skill level. Get real-time
                            speech analysis, confidence scoring, and personalized feedback to transform
                            your interview performance.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                to="/login"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold text-lg shadow-2xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300"
                            >
                                Start Free Practice
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                                <Play className="w-5 h-5 text-primary-400" />
                                Watch Demo
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-10"
                        >
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl mb-1">{stat.icon}</div>
                                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="relative z-10 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            variants={fadeIn}
                            custom={0}
                            className="text-3xl sm:text-4xl font-bold text-white mb-4"
                        >
                            Everything You Need to{' '}
                            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                                Succeed
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={fadeIn}
                            custom={1}
                            className="text-gray-400 max-w-2xl mx-auto text-lg"
                        >
                            Our platform combines cutting-edge AI with proven interview techniques
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                custom={i}
                                className="group p-6 rounded-2xl glass hover:bg-surface-elevated/80 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/5"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="relative z-10 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            variants={fadeIn}
                            custom={0}
                            className="text-3xl sm:text-4xl font-bold text-white mb-4"
                        >
                            How It Works
                        </motion.h2>
                        <motion.p
                            variants={fadeIn}
                            custom={1}
                            className="text-gray-400 max-w-2xl mx-auto text-lg"
                        >
                            Get started in three simple steps
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0" />
                        {[
                            {
                                step: '01',
                                title: 'Choose Your Domain',
                                desc: 'Select from Software Engineering, Data Science, HR, and more. Each domain has curated questions tailored to real interviews.',
                            },
                            {
                                step: '02',
                                title: 'Practice & Speak',
                                desc: 'Answer questions via your microphone. Our AI transcribes your speech in real-time and evaluates your response content and delivery.',
                            },
                            {
                                step: '03',
                                title: 'Review & Improve',
                                desc: 'Get a detailed report card with scores, model answers, and actionable feedback. Track your progress over multiple sessions.',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                custom={i}
                                className="relative text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white text-xl font-bold mb-6 shadow-lg shadow-primary-500/30">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="relative z-10 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            variants={fadeIn}
                            custom={0}
                            className="text-3xl sm:text-4xl font-bold text-white mb-4"
                        >
                            Loved by Candidates{' '}
                            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                                Worldwide
                            </span>
                        </motion.h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                custom={i}
                                className="p-6 rounded-2xl glass hover:bg-surface-elevated/60 transition-all duration-300"
                            >
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-warning-400 text-warning-400" />
                                    ))}
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                                <div>
                                    <div className="font-semibold text-white text-sm">{t.name}</div>
                                    <div className="text-gray-500 text-xs">{t.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        custom={0}
                        className="p-12 rounded-3xl bg-gradient-to-br from-primary-900/40 to-primary-800/20 border border-primary-500/20"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Ready to Transform Your Interview Skills?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                            Join thousands of successful candidates who prepared with InterviewIQ
                        </p>
                        <Link
                            to="/login"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold text-lg shadow-2xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300"
                        >
                            <Sparkles className="w-5 h-5" />
                            Start Practicing Now — It's Free
                        </Link>
                        <div className="mt-6 flex justify-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                                <CheckCircle className="w-4 h-4 text-accent-500" />
                                No credit card required
                            </span>
                            <span className="flex items-center gap-1">
                                <CheckCircle className="w-4 h-4 text-accent-500" />
                                5 free sessions
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-surface-border py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                                <span className="text-white text-sm">🎙</span>
                            </div>
                            <span className="font-bold text-white">InterviewIQ</span>
                        </div>
                        <p className="text-gray-500 text-sm">
                            © 2026 InterviewIQ. AI-Powered Interview Preparation Platform.
                        </p>
                        <div className="flex gap-6 text-sm text-gray-500">
                            <a href="#" className="hover:text-primary-400 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-primary-400 transition-colors">Terms</a>
                            <a href="#" className="hover:text-primary-400 transition-colors">Support</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
