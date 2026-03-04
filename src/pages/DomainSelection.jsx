import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldAlert, ArrowLeft, Briefcase } from 'lucide-react';
import { companies } from '../data/mockData';
import ParticleBackground from '../components/ParticleBackground';

export default function DomainSelection() {
    const navigate = useNavigate();
    const [selectedCompany, setSelectedCompany] = useState(null);

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

    const handleStartInterview = (roleId) => {
        navigate(`/interview-construction/${selectedCompany.id}/${roleId}`);
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
                    <AnimatePresence mode="wait">
                        {!selectedCompany ? (
                            <motion.div key="company-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                                    Select Your Target <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Company</span>
                                </h1>
                                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                    Choose the specific company you are preparing for to get customized questions and scenarios based on their interview format.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div key="role-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <button
                                    onClick={() => setSelectedCompany(null)}
                                    className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-lg glass text-gray-300 hover:text-white transition-colors border border-surface-border text-sm"
                                >
                                    <ArrowLeft className="w-4 h-4" /> Back to Companies
                                </button>
                                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                                    Select Role at <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">{selectedCompany.name}</span>
                                </h1>
                                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                    Choose the specific role you are interviewing or practicing for.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {!selectedCompany ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {companies.map((company) => (
                            <motion.div
                                key={company.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="glass p-1 rounded-2xl group cursor-pointer relative overflow-hidden h-full flex flex-col"
                                onClick={() => setSelectedCompany(company)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="p-6 h-full flex flex-col relative z-10 bg-surface-card/40 rounded-xl backdrop-blur-sm border border-transparent group-hover:border-primary-500/30 transition-colors">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl bg-gradient-to-br ${company.color} shadow-lg shadow-black/20`}>
                                            {company.logo}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                                        {company.name}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                        {company.description}
                                    </p>

                                    <div className="mt-auto">
                                        <button className="w-full py-2.5 rounded-lg bg-surface-elevated text-white font-medium flex items-center justify-center gap-2 group-hover:bg-primary-600 transition-colors duration-300">
                                            View Roles
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                    >
                        {selectedCompany.roles.map((role) => (
                            <motion.div
                                key={role.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="glass p-6 rounded-2xl group cursor-pointer relative overflow-hidden flex flex-col border border-surface-border hover:border-primary-500/50 transition-colors bg-surface-card/60"
                                onClick={() => handleStartInterview(role.id)}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center border border-surface-border">
                                        <Briefcase className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors">
                                        {role.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-500 mb-6 flex-grow">
                                    Start a tailored interview session focusing on {role.title} responsibilities at {selectedCompany.name}.
                                </p>
                                <div className="mt-auto">
                                    <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25 transition-all outline-none">
                                        Select Role
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

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
