import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BookOpen, ArrowRight, ShieldAlert } from 'lucide-react';
import { domains } from '../data/mockData';
import ParticleBackground from '../components/ParticleBackground';

export default function DomainSelection() {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const handleStartInterview = (domainId) => {
        navigate(`/interview/${domainId}`);
    };

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <ParticleBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        Select Your Interview <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Domain</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Choose the specific role or skillset you want to practice. Our AI will
                        generate context-aware questions tailored to industry standards.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {domains.map((domain) => (
                        <motion.div
                            key={domain.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="glass p-1 rounded-2xl group cursor-pointer relative overflow-hidden h-full flex flex-col"
                            onClick={() => handleStartInterview(domain.id)}
                        >
                            {/* Hover Glow Effect */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            />

                            <div className="p-6 h-full flex flex-col relative z-10 bg-surface-card/40 rounded-xl backdrop-blur-sm border border-transparent group-hover:border-primary-500/30 transition-colors">
                                <div className="flex justify-between items-start mb-4">
                                    <div
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${domain.color} shadow-lg`}
                                    >
                                        {domain.icon}
                                    </div>
                                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-surface-border text-gray-300 border border-white/5">
                                        {domain.difficulty}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                                    {domain.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {domain.description}
                                </p>

                                <div className="space-y-4 mt-auto">
                                    <div className="flex items-center justify-between text-sm text-gray-400 border-t border-surface-border/50 pt-4">
                                        <span className="flex items-center gap-1.5">
                                            <BookOpen className="w-4 h-4 text-primary-400" />
                                            {domain.questionCount} Questions
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4 text-accent-400" />
                                            ~{domain.avgDuration}
                                        </span>
                                    </div>

                                    <button className="w-full py-2.5 rounded-lg bg-surface-elevated text-white font-medium flex items-center justify-center gap-2 group-hover:bg-primary-600 transition-colors duration-300">
                                        Start Session
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 max-w-2xl mx-auto"
                >
                    <div className="glass p-4 rounded-xl flex items-start sm:items-center gap-4 border-l-4 border-l-warning-500">
                        <ShieldAlert className="w-6 h-6 text-warning-400 flex-shrink-0 mt-1 sm:mt-0" />
                        <div>
                            <h4 className="text-white text-sm font-semibold">Pro Tip for Microphones</h4>
                            <p className="text-gray-400 text-sm mt-1">
                                Ensure you are in a quiet environment and your browser has microphone permissions enabled before starting the interview session.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
