import { useEffect, useState } from 'react';

export default function ScoreRing({ score, size = 120, strokeWidth = 8, label, color }) {
    const [animatedScore, setAnimatedScore] = useState(0);
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (animatedScore / 100) * circumference;

    const colorMap = {
        green: { stroke: '#10b981', glow: 'rgba(16, 185, 129, 0.3)' },
        blue: { stroke: '#6366f1', glow: 'rgba(99, 102, 241, 0.3)' },
        amber: { stroke: '#f59e0b', glow: 'rgba(245, 158, 11, 0.3)' },
        red: { stroke: '#ef4444', glow: 'rgba(239, 68, 68, 0.3)' },
        purple: { stroke: '#a855f7', glow: 'rgba(168, 85, 247, 0.3)' },
    };

    const getAutoColor = (s) => {
        if (s >= 80) return 'green';
        if (s >= 60) return 'blue';
        if (s >= 40) return 'amber';
        return 'red';
    };

    const colorKey = color || getAutoColor(score);
    const colors = colorMap[colorKey] || colorMap.blue;

    useEffect(() => {
        let start = 0;
        const duration = 1200;
        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setAnimatedScore(Math.round(score * eased));
            if (progress < 1) requestAnimationFrame(animate);
        };
        animate();
    }, [score]);

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative" style={{ width: size, height: size }}>
                <svg width={size} height={size} className="transform -rotate-90">
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="rgba(99, 102, 241, 0.1)"
                        strokeWidth={strokeWidth}
                        fill="none"
                    />
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke={colors.stroke}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{
                            transition: 'stroke-dashoffset 0.3s ease',
                            filter: `drop-shadow(0 0 6px ${colors.glow})`,
                        }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{animatedScore}</span>
                </div>
            </div>
            {label && <span className="text-xs text-gray-400 font-medium">{label}</span>}
        </div>
    );
}
