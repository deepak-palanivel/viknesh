import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mic, BarChart3, User, LogOut } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const location = useLocation();
    const isAuth = location.pathname !== '/' && location.pathname !== '/login';

    const navLinks = isAuth
        ? [
            { to: '/dashboard', label: 'Dashboard', icon: BarChart3 },
            { to: '/domains', label: 'Start Interview', icon: Mic },
        ]
        : [
            { to: '/#features', label: 'Features' },
            { to: '/#how-it-works', label: 'How It Works' },
            { to: '/#testimonials', label: 'Testimonials' },
        ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to={isAuth ? '/dashboard' : '/'} className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all duration-300">
                            <Mic className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">
                            InterviewIQ
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${location.pathname === link.to
                                        ? 'text-primary-300 bg-primary-500/10'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.icon && <link.icon className="w-4 h-4" />}
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        {isAuth ? (
                            <div className="relative">
                                <button
                                    onClick={() => setShowProfile(!showProfile)}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-sm font-bold text-white">
                                        V
                                    </div>
                                    <span className="text-sm text-gray-300">Viknesh</span>
                                </button>
                                {showProfile && (
                                    <div className="absolute right-0 top-12 w-48 glass-strong rounded-xl p-2 shadow-2xl animate-slide-up">
                                        <Link
                                            to="/dashboard"
                                            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                                            onClick={() => setShowProfile(false)}
                                        >
                                            <User className="w-4 h-4" />
                                            Profile
                                        </Link>
                                        <Link
                                            to="/"
                                            className="flex items-center gap-2 px-3 py-2 text-sm text-danger-400 hover:bg-danger-400/10 rounded-lg transition-all"
                                            onClick={() => setShowProfile(false)}
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Log Out
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/login"
                                    className="px-5 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300"
                                >
                                    Get Started Free
                                </Link>
                            </>
                        )}
                    </div>

                    <button
                        className="md:hidden text-gray-400 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden glass-strong border-t border-surface-border animate-slide-up">
                    <div className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="block px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        {!isAuth && (
                            <Link
                                to="/login"
                                className="block w-full text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold text-sm mt-3"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started Free
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
