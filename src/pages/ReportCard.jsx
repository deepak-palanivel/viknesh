import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Download, Share2, ArrowRight, CheckCircle2,
    XCircle, AlertTriangle, TrendingUp, BookOpen, Clock, Activity, FileText
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { mockReportData } from '../data/mockData';
import ScoreRing from '../components/ScoreRing';
import ParticleBackground from '../components/ParticleBackground';

export default function ReportCard() {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const report = mockReportData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    // Ensure tooltips map correctly dynamically
    const fillerWordData = Object.entries(report.fillerWords).map(([word, count]) => ({
        name: `"${word}"`,
        count,
    }));

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative">
            <ParticleBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm font-semibold border border-primary-500/30">
                                Performance Report
                            </span>
                            <span className="text-gray-400 text-sm flex items-center gap-1">
                                <Clock className="w-4 h-4" /> {report.totalDuration}
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Software Engineering <span className="text-gray-500 font-normal">#INT-001</span>
                        </h1>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl glass text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-surface-border">
                            <Share2 className="w-4 h-4" /> Share
                        </button>
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-medium shadow-lg shadow-primary-500/20 transition-all">
                            <Download className="w-4 h-4" /> PDF Report
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {/* Main Score Overview */}
                    <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
                        <div className="glass p-8 rounded-3xl text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h2 className="text-lg font-semibold text-gray-300 mb-6">Overall Score</h2>
                            <div className="flex justify-center mb-6 scale-110">
                                <ScoreRing score={report.overallScore} size={160} strokeWidth={12} />
                            </div>
                            <p className="text-gray-400 text-sm italic mb-2">
                                "Solid technical knowledge, but confidence can be improved during system design."
                            </p>
                        </div>

                        <div className="glass p-6 rounded-3xl">
                            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-accent-400" /> Metric Breakdown
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'Technical Accuracy', score: report.technicalAccuracy, color: 'bg-emerald-500' },
                                    { label: 'Communication Clarity', score: report.communicationClarity, color: 'bg-blue-500' },
                                    { label: 'Confidence Score', score: report.confidenceScore, color: 'bg-purple-500' },
                                ].map((metric, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-300 font-medium">{metric.label}</span>
                                            <span className="text-white font-bold">{metric.score}%</span>
                                        </div>
                                        <div className="h-2.5 w-full bg-surface-elevated rounded-full overflow-hidden border border-surface-border">
                                            <motion.div
                                                className={`h-full rounded-full ${metric.color}`}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${metric.score}%` }}
                                                transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Detailed Feedback */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="glass p-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <CheckCircle2 className="w-24 h-24 text-emerald-500" />
                                </div>
                                <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2 relative z-10">
                                    <CheckCircle2 className="w-5 h-5" /> What You Did Well
                                </h3>
                                <ul className="space-y-3 relative z-10">
                                    {report.strongAreas.map((area, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                                            <span className="text-emerald-500 mt-1">•</span>
                                            {area}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="glass p-6 rounded-3xl border border-warning-500/20 bg-warning-500/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <AlertTriangle className="w-24 h-24 text-warning-500" />
                                </div>
                                <h3 className="text-lg font-bold text-warning-400 mb-4 flex items-center gap-2 relative z-10">
                                    <TrendingUp className="w-5 h-5" /> Areas to Improve
                                </h3>
                                <ul className="space-y-3 relative z-10">
                                    {report.improvementAreas.map((area, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                                            <span className="text-warning-500 mt-1">•</span>
                                            {area}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Speech Analysis Section */}
                        <div className="glass p-6 rounded-3xl">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Activity className="w-6 h-6 text-primary-400" /> Speech & Delivery Analysis
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-surface-elevated/50 p-4 rounded-xl text-center border border-surface-border">
                                    <div className="text-3xl font-bold text-white mb-1">{report.wordsPerMinute}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Words / Min</div>
                                    <div className="mt-2 text-sm text-emerald-400 bg-emerald-400/10 rounded-full py-1">Ideal Pace</div>
                                </div>
                                <div className="bg-surface-elevated/50 p-4 rounded-xl text-center border border-surface-border">
                                    <div className="text-3xl font-bold text-white mb-1">{report.fillerWordCount}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Filler Words</div>
                                    <div className="mt-2 text-sm text-warning-400 bg-warning-400/10 rounded-full py-1">Slightly High</div>
                                </div>
                                <div className="bg-surface-elevated/50 p-4 rounded-xl text-center border border-surface-border flex flex-col justify-center">
                                    <div className="text-lg font-bold text-white mb-1">{report.speechPace}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Delivery Tone</div>
                                </div>
                            </div>

                            <div className="h-64 mt-4">
                                <h4 className="text-sm font-semibold text-gray-400 mb-4">Filler Word Usage Breakdown</h4>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={fillerWordData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                                        <XAxis dataKey="name" stroke="#6b7280" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
                                        <YAxis stroke="#6b7280" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
                                        <Tooltip cursor={{ fill: '#231f3e' }} contentStyle={{ backgroundColor: '#1a1730', borderColor: '#2e2a4a', borderRadius: '0.5rem', color: '#fff' }} />
                                        <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                                            {fillerWordData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index === 0 ? '#ef4444' : '#f59e0b'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Question by Question Review */}
                        <div className="glass rounded-3xl overflow-hidden">
                            <div className="p-6 border-b border-surface-border bg-surface-elevated/30">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <FileText className="w-6 h-6 text-primary-400" /> Question Breakdown
                                </h3>
                            </div>

                            <div className="flex">
                                {/* Question Tabs */}
                                <div className="w-1/3 border-r border-surface-border hidden sm:block bg-surface/30">
                                    {report.questionResults.map((qr, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveQuestion(idx)}
                                            className={`w-full text-left p-4 border-b border-surface-border transition-colors hover:bg-surface-elevated ${activeQuestion === idx ? 'bg-primary-500/10 border-l-4 border-primary-500' : 'border-l-4 border-transparent'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className={`text-xs font-bold ${activeQuestion === idx ? 'text-primary-400' : 'text-gray-500'}`}>
                                                    Q{idx + 1}
                                                </span>
                                                <span className={`text-xs px-2 py-0.5 rounded font-bold ${qr.score >= 80 ? 'bg-emerald-500/20 text-emerald-400' :
                                                        qr.score >= 60 ? 'bg-warning-500/20 text-warning-400' :
                                                            'bg-danger-500/20 text-danger-400'
                                                    }`}>
                                                    {qr.score}/100
                                                </span>
                                            </div>
                                            <p className={`text-sm line-clamp-2 ${activeQuestion === idx ? 'text-white' : 'text-gray-400'}`}>
                                                {qr.question}
                                            </p>
                                        </button>
                                    ))}
                                </div>

                                {/* Selected Question Details */}
                                <div className="flex-1 p-6 bg-surface/20">
                                    <div className="mb-6">
                                        <h4 className="text-xl font-bold text-white mb-2 leading-snug">
                                            "{report.questionResults[activeQuestion].question}"
                                        </h4>
                                        <div className="flex gap-3 text-sm">
                                            <span className="px-2 py-1 rounded bg-surface-elevated text-gray-300 border border-surface-border">
                                                Score: {report.questionResults[activeQuestion].score}/100
                                            </span>
                                            <span className="px-2 py-1 rounded bg-surface-elevated text-gray-300 border border-surface-border">
                                                Delivery: {report.questionResults[activeQuestion].confidenceLevel} Confidence
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                                <BookOpen className="w-4 h-4 text-primary-400" /> AI Feedback
                                            </h5>
                                            <div className="bg-primary-500/5 border border-primary-500/20 p-4 rounded-xl text-gray-300 text-sm leading-relaxed">
                                                {report.questionResults[activeQuestion].feedback}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center gap-1">
                                                    <CheckCircle2 className="w-4 h-4" /> Covered Topics
                                                </h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {report.questionResults[activeQuestion].topicsCovered.map((t, i) => (
                                                        <span key={i} className="px-2 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="text-sm font-semibold text-danger-400 mb-2 flex items-center gap-1">
                                                    <XCircle className="w-4 h-4" /> Missed Topics
                                                </h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {report.questionResults[activeQuestion].topicsMissed.map((t, i) => (
                                                        <span key={i} className="px-2 py-1 rounded-md text-xs font-medium bg-danger-500/10 text-danger-300 border border-danger-500/20">
                                                            {t}
                                                        </span>
                                                    ))}
                                                    {report.questionResults[activeQuestion].topicsMissed.length === 0 && (
                                                        <span className="text-sm text-gray-500 italic">None - excellent coverage!</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile Navigation for questions */}
                                    <div className="sm:hidden mt-8 pt-4 border-t border-surface-border flex justify-between">
                                        <button
                                            onClick={() => setActiveQuestion(Math.max(0, activeQuestion - 1))}
                                            disabled={activeQuestion === 0}
                                            className="text-sm text-primary-400 disabled:opacity-30 disabled:cursor-not-allowed"
                                        >
                                            &larr; Previous
                                        </button>
                                        <span className="text-sm text-gray-500">{activeQuestion + 1} of {report.questionResults.length}</span>
                                        <button
                                            onClick={() => setActiveQuestion(Math.min(report.questionResults.length - 1, activeQuestion + 1))}
                                            disabled={activeQuestion === report.questionResults.length - 1}
                                            className="text-sm text-primary-400 disabled:opacity-30 disabled:cursor-not-allowed"
                                        >
                                            Next &rarr;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-8">
                            <Link
                                to="/dashboard"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold text-lg shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 group"
                            >
                                Back to Dashboard
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
