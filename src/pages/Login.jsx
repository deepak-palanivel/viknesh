import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would be an API call to authenticate
        // For this demo, we'll just redirect to dashboard
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative p-4">
            <ParticleBackground />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md glass-strong rounded-3xl p-8 relative z-10"
            >
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 group mb-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg">
                            <span className="text-white text-xl">🎙</span>
                        </div>
                    </Link>
                    <h2 className="text-2xl font-bold text-white mb-2">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p className="text-gray-400 text-sm">
                        {isLogin
                            ? 'Enter your details to access your dashboard'
                            : 'Sign up to start practicing interviews for free'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="w-5 h-5 text-gray-500" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-surface-elevated/50 border border-surface-border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 outline-none transition-all"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="w-5 h-5 text-gray-500" />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-surface-elevated/50 border border-surface-border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 outline-none transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">Confirm Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="w-5 h-5 text-gray-500" />
                                </div>
                                <input
                                    type="password"
                                    className="w-full pl-10 pr-4 py-3 bg-surface-elevated/50 border border-surface-border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 outline-none transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {isLogin && (
                        <div className="flex justify-end">
                            <a href="#" className="text-sm text-primary-400 hover:text-primary-300 transition-colors">
                                Forgot password?
                            </a>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                    >
                        {isLogin ? 'Sign In' : 'Sign Up'}
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </form>

                <div className="mt-6 flex items-center">
                    <div className="flex-1 border-t border-surface-border"></div>
                    <span className="px-3 text-sm text-gray-500">or continue with</span>
                    <div className="flex-1 border-t border-surface-border"></div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-surface-border hover:bg-surface-elevated transition-all text-sm font-medium text-gray-300 hover:text-white">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-surface-border hover:bg-surface-elevated transition-all text-sm font-medium text-gray-300 hover:text-white">
                        <Github className="w-5 h-5" />
                        GitHub
                    </button>
                </div>

                <div className="mt-8 text-center text-sm text-gray-400">
                    {isLogin ? "Don't have an account? " : 'Already have an account? '}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-primary-400 hover:text-primary-300 font-semibold transition-colors"
                    >
                        {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
