import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    TrendingUp, Clock, Target, CalendarDays, ChevronRight,
    Medal, Star, Activity, BarChart2
} from 'lucide-react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    RadarChart, PolarGrid, PolarAngleAxis, Radar
} from 'recharts';
import { mockInterviewHistory, mockReportData, userProfile } from '../data/mockData';
import ScoreRing from '../components/ScoreRing';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header Profile Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8"
            >
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-500 p-0.5 shadow-lg shadow-primary-500/20">
                        <div className="w-full h-full bg-surface-card rounded-[14px] flex items-center justify-center text-2xl font-bold text-white">
                            {userProfile.name.charAt(0)}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                            Welcome back, {userProfile.name.split(' ')[0]}!
                        </h1>
                        <p className="text-gray-400 flex items-center gap-2 text-sm">
                            <Star className="w-4 h-4 text-warning-400 fill-warning-400" />
                            {userProfile.plan} Member • {userProfile.streak} Day Learning Streak
                        </p>
                    </div>
                </div>
                <Link
                    to="/domains"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-500 hover:to-primary-700 text-white font-semibold shadow-lg shadow-primary-500/20 transition-all hover:scale-105"
                >
                    <Activity className="w-5 h-5" />
                    Start New Interview
                </Link>
            </motion.div>

            {/* Tabs */}
            <div className="flex border-b border-surface-border mb-8 overflow-x-auto hide-scrollbar">
                {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'history', label: 'Interview History' },
                    { id: 'analytics', label: 'Detailed Analytics' },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors duration-200 ${activeTab === tab.id
                                ? 'border-primary-500 text-white'
                                : 'border-transparent text-gray-400 hover:text-gray-200'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={activeTab}
            >
                {activeTab === 'overview' && (
                    <div className="space-y-8">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { label: 'Total Interviews', value: userProfile.totalInterviews, icon: Target, color: 'text-blue-400', bg: 'bg-blue-400/10' },
                                { label: 'Average Score', value: `${userProfile.avgScore}%`, icon: Medal, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
                                { label: 'Time Practiced', value: '4.2 hrs', icon: Clock, color: 'text-purple-400', bg: 'bg-purple-400/10' },
                                { label: 'Improvement', value: '+12%', icon: TrendingUp, color: 'text-accent-400', bg: 'bg-accent-400/10' },
                            ].map((stat, i) => (
                                <motion.div key={i} variants={itemVariants} className="glass p-5 rounded-2xl">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-2.5 rounded-lg ${stat.bg}`}>
                                            <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                        </div>
                                    </div>
                                    <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Performance Trend Chart */}
                            <motion.div variants={itemVariants} className="lg:col-span-2 glass p-6 rounded-2xl flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                        <BarChart2 className="w-5 h-5 text-primary-400" />
                                        Performance Trend
                                    </h3>
                                    <select className="bg-surface-elevated/50 border border-surface-border text-gray-300 text-sm rounded-lg px-3 py-1.5 focus:ring-primary-500">
                                        <option>Last 5 Sessions</option>
                                        <option>Last 30 Days</option>
                                        <option>All Time</option>
                                    </select>
                                </div>
                                <div className="flex-1 min-h-[300px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={mockReportData.performanceTrend}>
                                            <defs>
                                                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#2e2a4a" vertical={false} />
                                            <XAxis dataKey="session" stroke="#6b7280" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                                            <YAxis stroke="#6b7280" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} domain={[0, 100]} />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: '#1a1730', borderColor: '#2e2a4a', borderRadius: '0.5rem', color: '#e2e8f0' }}
                                                itemStyle={{ color: '#818cf8', fontWeight: 600 }}
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="score"
                                                stroke="#6366f1"
                                                strokeWidth={3}
                                                dot={{ r: 4, fill: '#1a1730', stroke: '#6366f1', strokeWidth: 2 }}
                                                activeDot={{ r: 6, fill: '#818cf8', stroke: '#fff', strokeWidth: 2 }}
                                                animationDuration={1500}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </motion.div>

                            {/* Skills Radar */}
                            <motion.div variants={itemVariants} className="glass p-6 rounded-2xl flex flex-col">
                                <h3 className="text-lg font-semibold text-white mb-6">Skill Assessment</h3>
                                <div className="flex-1 min-h-[300px] w-full -ml-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={mockReportData.skillRadar}>
                                            <PolarGrid stroke="#2e2a4a" />
                                            <PolarAngleAxis dataKey="skill" tick={{ fill: '#9ca3af', fontSize: 11 }} />
                                            <Radar
                                                name="Score"
                                                dataKey="score"
                                                stroke="#10b981"
                                                fill="#10b981"
                                                fillOpacity={0.2}
                                                animationDuration={1500}
                                            />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: '#1a1730', borderColor: '#2e2a4a', borderRadius: '0.5rem' }}
                                            />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="mt-4 flex justify-between items-center bg-surface-elevated/40 p-3 rounded-xl border border-surface-border">
                                    <span className="text-sm text-gray-400">Strongest Area</span>
                                    <span className="text-sm font-semibold text-accent-400">Technical Knowledge (84)</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Recent History Preview */}
                        <motion.div variants={itemVariants} className="glass rounded-2xl overflow-hidden">
                            <div className="p-6 border-b border-surface-border flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-white">Recent Sessions</h3>
                                <button
                                    onClick={() => setActiveTab('history')}
                                    className="text-sm text-primary-400 hover:text-primary-300 flex items-center gap-1"
                                >
                                    View All <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="divide-y divide-surface-border">
                                {mockInterviewHistory.slice(0, 3).map((session, i) => (
                                    <Link
                                        key={session.id}
                                        to="/report"
                                        className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 hover:bg-surface-elevated/40 transition-colors group"
                                    >
                                        <div className="flex-shrink-0">
                                            <ScoreRing score={session.overallScore} size={60} strokeWidth={4} />
                                        </div>
                                        <div className="flex-1 w-full text-center sm:text-left">
                                            <h4 className="font-semibold text-white mb-1 group-hover:text-primary-300 transition-colors">
                                                {session.domain} Mock Interview
                                            </h4>
                                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-gray-400">
                                                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> {session.date}</span>
                                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {session.duration}</span>
                                            </div>
                                        </div>
                                        <div className="hidden sm:flex items-center gap-2 text-primary-400 group-hover:translate-x-1 transition-transform">
                                            <span className="text-sm font-medium">View Report</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}

                {activeTab === 'history' && (
                    <div className="glass rounded-2xl overflow-hidden">
                        <div className="p-6 border-b border-surface-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <h3 className="text-lg font-semibold text-white">All Interview History</h3>
                            <div className="flex gap-2 w-full sm:w-auto">
                                <select className="bg-surface-elevated w-full sm:w-auto border border-surface-border text-gray-300 text-sm rounded-lg px-3 py-2 flex-1">
                                    <option>All Domains</option>
                                    <option>Software Engineering</option>
                                    <option>Data Science</option>
                                    <option>HR & Behavioral</option>
                                </select>
                                <select className="bg-surface-elevated w-full sm:w-auto border border-surface-border text-gray-300 text-sm rounded-lg px-3 py-2 flex-1">
                                    <option>Newest First</option>
                                    <option>Highest Score</option>
                                    <option>Lowest Score</option>
                                </select>
                            </div>
                        </div>
                        <div className="divide-y divide-surface-border">
                            {mockInterviewHistory.map((session) => (
                                <Link
                                    key={session.id}
                                    to="/report"
                                    className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 hover:bg-surface-elevated/40 transition-colors group"
                                >
                                    <div className="flex-shrink-0">
                                        <ScoreRing score={session.overallScore} size={64} strokeWidth={5} />
                                    </div>
                                    <div className="flex-1 w-full">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-semibold text-white group-hover:text-primary-300 transition-colors">
                                                {session.domain}
                                            </h4>
                                            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-surface-elevated text-gray-300 border border-surface-border">
                                                {session.questionsAnswered} Questions
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
                                            <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> {session.date}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {session.duration}</span>
                                            <span className="hidden sm:inline-block">Technical: <span className="text-emerald-400">{session.technicalScore}%</span></span>
                                            <span className="hidden sm:inline-block">Confidence: <span className="text-blue-400">{session.confidenceScore}%</span></span>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-primary-400 hidden sm:block group-hover:translate-x-1 transition-transform" />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'analytics' && (
                    <div className="glass p-8 rounded-2xl text-center">
                        <h3 className="text-xl font-semibold text-white mb-2">Detailed Analytics Coming Soon</h3>
                        <p className="text-gray-400 max-w-md mx-auto">
                            We are working on deeper insights into your speech patterns, filler word trends, and targeted technical improvement areas.
                        </p>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
