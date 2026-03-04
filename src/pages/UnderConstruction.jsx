import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HardHat, ArrowLeft } from 'lucide-react';
import { companies } from '../data/mockData';
import ParticleBackground from '../components/ParticleBackground';

export default function UnderConstruction() {
    const { companyId, roleId } = useParams();

    // Find company and role details to personalize the message
    const company = companies.find(c => c.id === companyId);
    const role = company?.roles.find(r => r.id === roleId);

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
            <ParticleBackground />

            <div className="max-w-2xl w-full mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-strong p-10 rounded-3xl border border-surface-border"
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        className="w-24 h-24 bg-warning-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <HardHat className="w-12 h-12 text-warning-400" />
                    </motion.div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        Under Construction
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        We are currently tailoring the ultimate interview experience for <strong className="text-white">{role?.title || 'this role'}</strong> at <strong className="text-white">{company?.name || 'this company'}</strong>. The AI models are being trained on company-specific technical stacks and behavioral patterns.
                    </p>

                    <div className="inline-block p-4 rounded-xl bg-surface-elevated border border-surface-border mb-8">
                        <p className="text-sm text-gray-400 font-medium">Expected completion: <span className="text-primary-400">Coming Soon</span></p>
                    </div>

                    <div>
                        <Link
                            to="/domains"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Selection
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
