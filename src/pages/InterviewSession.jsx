import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mic, MicOff, Square, Play, AlertCircle, ChevronRight,
    Loader2, Maximize2, Minimize2, Video, VideoOff
} from 'lucide-react';
import { domains, interviewQuestions } from '../data/mockData';

export default function InterviewSession() {
    const { domainId } = useParams();
    const navigate = useNavigate();
    const videoRef = useRef(null);

    const [domain, setDomain] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [currentIdx, setCurrentIdx] = useState(0);

    const [isRecording, setIsRecording] = useState(false);
    const [duration, setDuration] = useState(0);
    const [transcript, setTranscript] = useState('');

    const [cameraOn, setCameraOn] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const [answers, setAnswers] = useState({});

    useEffect(() => {
        const d = domains.find((d) => d.id === domainId);
        if (!d) {
            navigate('/domains');
            return;
        }
        setDomain(d);
        setQuestions(interviewQuestions[domainId] || []);
        startCamera();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, [domainId, navigate]);

    useEffect(() => {
        let interval;
        if (isRecording) {
            interval = setInterval(() => {
                setDuration((prev) => prev + 1);
                // Simulate transcription arriving over time
                if (duration > 0 && duration % 3 === 0) {
                    const words = ['I believe', 'that', 'the best approach', 'um', 'is to', 'utilize', 'abstract', 'concepts', 'like'];
                    const newWord = words[Math.floor(Math.random() * words.length)];
                    setTranscript((prev) => prev + ' ' + newWord);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRecording, duration]);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setCameraOn(true);
        } catch (err) {
            setCameraOn(false);
        }
    };

    const toggleCamera = () => {
        if (cameraOn) {
            const stream = videoRef.current.srcObject;
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
                videoRef.current.srcObject = null;
            }
            setCameraOn(false);
        } else {
            startCamera();
        }
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    const handleStartStop = () => {
        if (isRecording) {
            // Save Answer
            setAnswers({
                ...answers,
                [questions[currentIdx].id]: transcript,
            });
            setIsRecording(false);
        } else {
            setTranscript('');
            setDuration(0);
            setIsRecording(true);
        }
    };

    const handleNext = () => {
        if (isRecording) handleStartStop();

        if (currentIdx < questions.length - 1) {
            setCurrentIdx(currentIdx + 1);
            setTranscript('');
            setDuration(0);
        } else {
            finishInterview();
        }
    };

    const finishInterview = () => {
        setIsProcessing(true);
        // Simulate API processing delay
        setTimeout(() => {
            setIsProcessing(false);
            navigate('/report');
        }, 3000);
    };

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    if (!domain || questions.length === 0) return null;

    const q = questions[currentIdx];
    const isLast = currentIdx === questions.length - 1;
    const progress = ((currentIdx + 1) / questions.length) * 100;

    if (isProcessing) {
        return (
            <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-4">
                <ParticleBackground />
                <div className="relative z-10 text-center glass-strong p-12 rounded-3xl max-w-md w-full border border-primary-500/20">
                    <Loader2 className="w-16 h-16 text-primary-500 animate-spin mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-white mb-3">Analyzing Performance</h2>
                    <p className="text-gray-400 mb-6">
                        Our AI model is evaluating your technical accuracy, speech pace, and confidence scoring.
                    </p>
                    <div className="w-full h-2 bg-surface-border rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary-400 to-accent-400"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 3, ease: 'easeInOut' }}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-surface flex flex-col relative">
            <ParticleBackground />

            {/* Top Bar Navigation */}
            <header className="relative z-20 h-16 glass border-b border-surface-border flex items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${domain.color} text-sm shadow-lg`}>
                            {domain.icon}
                        </div>
                        <span className="font-semibold text-white hidden sm:block">{domain.title}</span>
                    </div>
                    <div className="h-6 w-px bg-surface-border hidden sm:block"></div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                        <span className="text-primary-400">Q{currentIdx + 1}</span>
                        <span>of {questions.length}</span>
                    </div>
                </div>

                {/* Progress Bar within Header */}
                <div className="hidden md:block flex-1 max-w-md mx-8">
                    <div className="h-1.5 bg-surface-border rounded-full overflow-hidden">
                        <motion.div
                            className={`h-full bg-gradient-to-r ${domain.color}`}
                            initial={{ width: `${((currentIdx) / questions.length) * 100}%` }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleCamera}
                        className="p-2 rounded-lg hover:bg-gray-900/10 text-gray-300 transition-colors"
                        title={cameraOn ? "Turn off camera" : "Turn on camera"}
                    >
                        {cameraOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5 text-danger-400" />}
                    </button>
                    <button
                        onClick={toggleFullscreen}
                        className="p-2 rounded-lg hover:bg-gray-900/10 text-gray-300 hidden sm:block transition-colors"
                    >
                        {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                    </button>
                    <button className="px-4 py-1.5 rounded-lg text-sm font-medium text-danger-400 hover:bg-danger-400/10 transition-colors border border-danger-400/20">
                        End Session
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 relative z-10 flex flex-col md:flex-row overflow-hidden">

                {/* Left Side: Question & Transcript */}
                <div className="flex-1 flex flex-col h-full border-r border-surface-border bg-surface-card/60">
                    {/* Question View */}
                    <div className="flex-1 p-6 sm:p-10 overflow-y-auto custom-scrollbar flex flex-col">
                        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-xs font-semibold uppercase tracking-wider text-primary-300 w-fit">
                            {q.type} Question
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 ml-1"></span>
                            {q.difficulty}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={q.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 leading-tight"
                            >
                                "{q.question}"
                            </motion.h2>
                        </AnimatePresence>

                        <div className="mt-auto pt-8">
                            <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Live Transcript</h3>
                            <div className="glass p-6 rounded-2xl min-h-[160px] relative">
                                {!isRecording && !transcript && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 italic">
                                        <Mic className="w-8 h-8 mb-2 opacity-50" />
                                        Press start recording to begin your answer
                                    </div>
                                )}
                                {transcript && (
                                    <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
                                        {transcript}
                                        {isRecording && <span className="inline-block w-2 h-5 bg-primary-500 ml-1 animate-pulse align-middle" />}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Controls Dock */}
                    <div className="h-28 glass border-t border-surface-border flex items-center justify-between px-6 sm:px-10">
                        <div className="flex items-center gap-6">
                            <button
                                onClick={handleStartStop}
                                className={`relative group w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${isRecording
                                        ? 'bg-danger-500/20 text-danger-500 hover:bg-danger-500/30'
                                        : 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 hover:scale-105 hover:bg-primary-400'
                                    }`}
                            >
                                {isRecording && (
                                    <span className="absolute inset-0 rounded-full border-2 border-danger-500 animate-ping opacity-30"></span>
                                )}
                                {isRecording ? <Square className="w-6 h-6 fill-current" /> : <Mic className="w-7 h-7" />}
                            </button>

                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                                    {isRecording ? 'Recording' : 'Ready'}
                                </span>
                                <span className={`text-2xl font-mono font-bold font-variant-numeric ${isRecording ? 'text-danger-400' : 'text-white'}`}>
                                    {formatTime(duration)}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={handleNext}
                            disabled={isRecording && !transcript} // Prevent empty skips
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${isLast
                                    ? 'bg-gradient-to-r from-accent-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-accent-500/25'
                                    : 'bg-surface-elevated text-white hover:bg-surface-border'
                                } disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            {isLast ? 'Complete Interview' : 'Next Question'}
                            {!isLast && <ChevronRight className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Right Side: Media View & Guidelines */}
                <div className="hidden md:flex flex-col w-96 bg-surface-card border-l border-surface-border relative h-full">
                    {/* Virtual Camera / Candidate Feed */}
                    <div className="h-72 m-4 rounded-xl overflow-hidden bg-surface-elevated relative border border-surface-border shadow-inner">
                        {cameraOn ? (
                            <video
                                ref={videoRef}
                                autoPlay
                                playsInline
                                muted
                                className="w-full h-full object-cover transform scale-x-[-1]"
                            />
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                                <div className="w-20 h-20 rounded-full bg-surface mb-3 flex items-center justify-center">
                                    <span className="text-3xl text-gray-400">V</span>
                                </div>
                                <span>Camera Off</span>
                            </div>
                        )}

                        {/* Recording Indicator Overlay */}
                        <AnimatePresence>
                            {isRecording && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-surface/80 backdrop-blur-md rounded-full border border-danger-500/30"
                                >
                                    <span className="w-2.5 h-2.5 rounded-full bg-danger-500 animate-pulse"></span>
                                    <span className="text-xs font-semibold text-white tracking-wider">REC</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex-1 p-6 overflow-y-auto">
                        <h3 className="text-lg font-bold text-white mb-4">Guidelines</h3>
                        <div className="space-y-4">
                            <div className="glass p-4 rounded-xl space-y-2">
                                <div className="flex items-center gap-2 text-primary-300 font-semibold mb-2">
                                    <Play className="w-4 h-4 fill-current" /> Structuring Answer
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Use the STAR method (Situation, Task, Action, Result) for behavioral questions, or clarify inputs before solving technical ones.
                                </p>
                            </div>

                            <div className="glass p-4 rounded-xl space-y-2">
                                <div className="flex items-center gap-2 text-accent-400 font-semibold mb-2">
                                    <AlertCircle className="w-4 h-4" /> AI Confidence Scoring
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    We verify your pace and minimal use of filler words like "um" or "like". Take a deep breath if you need to pause.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
