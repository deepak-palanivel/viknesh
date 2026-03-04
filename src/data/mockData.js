export const companies = [
    {
        id: 'apple',
        name: 'Apple',
        logo: '🍎',
        color: 'from-gray-500 to-gray-700',
        description: 'Think Different. Design and hardware engineering focus.',
        roles: [
            { id: 'ui-designer', title: 'UI Designer' },
            { id: 'ios-engineer', title: 'iOS Engineer' },
            { id: 'hardware-engineer', title: 'Hardware Engineer' }
        ]
    },
    {
        id: 'google',
        name: 'Google',
        logo: '🔍',
        color: 'from-blue-500 to-red-500',
        description: 'Organize the worlds information. Algorithmic and scale focus.',
        roles: [
            { id: 'software-engineer', title: 'Software Engineer' },
            { id: 'product-manager', title: 'Product Manager' },
            { id: 'data-scientist', title: 'Data Scientist' }
        ]
    },
    {
        id: 'infosys',
        name: 'Infosys',
        logo: '🔷',
        color: 'from-blue-600 to-blue-800',
        description: 'Navigate your next. IT consulting and service delivery.',
        roles: [
            { id: 'systems-engineer', title: 'Systems Engineer' },
            { id: 'business-analyst', title: 'Business Analyst' },
            { id: 'technology-analyst', title: 'Technology Analyst' }
        ]
    },
    {
        id: 'wipro',
        name: 'Wipro',
        logo: '🌈',
        color: 'from-cyan-500 to-blue-600',
        description: 'Spirit of Wipro. Technology services and consulting.',
        roles: [
            { id: 'project-engineer', title: 'Project Engineer' },
            { id: 'java-developer', title: 'Java Developer' },
            { id: 'cloud-architect', title: 'Cloud Architect' }
        ]
    },
    {
        id: 'cts',
        name: 'Cognizant (CTS)',
        logo: '🌐',
        color: 'from-blue-700 to-indigo-900',
        description: 'Intuition engineered. Digital transformation focus.',
        roles: [
            { id: 'programmer-analyst', title: 'Programmer Analyst' },
            { id: 'qa-engineer', title: 'QA Engineer' },
            { id: 'scrum-master', title: 'Scrum Master' }
        ]
    },
    {
        id: 'tcs',
        name: 'TCS',
        logo: '🏢',
        color: 'from-sky-500 to-blue-700',
        description: 'Building on belief. IT services, consulting and business solutions.',
        roles: [
            { id: 'assistant-system-engineer', title: 'Assistant System Engineer' },
            { id: 'digital-specialist', title: 'Digital Specialist' },
            { id: 'data-engineer', title: 'Data Engineer' }
        ]
    },
    {
        id: 'microsoft',
        name: 'Microsoft',
        logo: '🪟',
        color: 'from-blue-500 to-cyan-500',
        description: 'Empowering others. OS, cloud, and enterprise software.',
        roles: [
            { id: 'sde', title: 'Software Development Engineer' },
            { id: 'program-manager', title: 'Program Manager' },
            { id: 'cloud-solution-architect', title: 'Cloud Solution Architect' }
        ]
    },
    {
        id: 'amazon',
        name: 'Amazon',
        logo: '📦',
        color: 'from-orange-400 to-yellow-600',
        description: 'Customer obsession. E-commerce and cloud computing.',
        roles: [
            { id: 'sde2', title: 'Software Dev Engineer II' },
            { id: 'aws-architect', title: 'AWS Solutions Architect' },
            { id: 'data-engineer', title: 'Data Engineer' }
        ]
    },
    {
        id: 'meta',
        name: 'Meta',
        logo: '♾️',
        color: 'from-blue-600 to-indigo-600',
        description: 'Connecting people. Social media and virtual reality.',
        roles: [
            { id: 'frontend-engineer', title: 'Frontend Engineer' },
            { id: 'backend-engineer', title: 'Backend Engineer' },
            { id: 'machine-learning-engineer', title: 'Machine Learning Engineer' }
        ]
    },
    {
        id: 'netflix',
        name: 'Netflix',
        logo: '🍿',
        color: 'from-red-600 to-red-800',
        description: 'Entertainment redefined. Streaming and content delivery.',
        roles: [
            { id: 'senior-software-engineer', title: 'Senior Software Engineer' },
            { id: 'data-analytics', title: 'Data Analytics Engineer' },
            { id: 'ui-engineer', title: 'UI Engineer' }
        ]
    }
];

export const domains = [
    {
        id: 'software-engineering',
        title: 'Software Engineering',
        icon: '💻',
        color: 'from-blue-500 to-indigo-600',
        description: 'Data structures, algorithms, system design, and coding best practices',
        questionCount: 15,
        avgDuration: '25 min',
        difficulty: 'Mixed',
    },
    {
        id: 'data-science',
        title: 'Data Science',
        icon: '📊',
        color: 'from-emerald-500 to-teal-600',
        description: 'Statistics, ML algorithms, data wrangling, and visualization techniques',
        questionCount: 12,
        avgDuration: '20 min',
        difficulty: 'Mixed',
    },
    {
        id: 'hr-behavioral',
        title: 'HR & Behavioral',
        icon: '🤝',
        color: 'from-amber-500 to-orange-600',
        description: 'Situational questions, leadership, teamwork, and conflict resolution',
        questionCount: 10,
        avgDuration: '15 min',
        difficulty: 'Moderate',
    },
    {
        id: 'product-management',
        title: 'Product Management',
        icon: '🚀',
        color: 'from-purple-500 to-pink-600',
        description: 'Product strategy, metrics, user research, and go-to-market planning',
        questionCount: 10,
        avgDuration: '20 min',
        difficulty: 'Mixed',
    },
    {
        id: 'devops',
        title: 'DevOps & Cloud',
        icon: '☁️',
        color: 'from-cyan-500 to-blue-600',
        description: 'CI/CD pipelines, containerization, cloud architecture, and monitoring',
        questionCount: 12,
        avgDuration: '20 min',
        difficulty: 'Advanced',
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        icon: '🔒',
        color: 'from-red-500 to-rose-600',
        description: 'Network security, penetration testing, encryption, and threat analysis',
        questionCount: 10,
        avgDuration: '20 min',
        difficulty: 'Advanced',
    },
];

export const interviewQuestions = {
    'software-engineering': [
        {
            id: 1,
            type: 'technical',
            question: 'Can you explain the difference between a stack and a queue? When would you use each data structure?',
            difficulty: 'Easy',
            expectedTopics: ['LIFO', 'FIFO', 'push', 'pop', 'enqueue', 'dequeue', 'use cases'],
            modelAnswer: 'A stack follows Last-In-First-Out (LIFO) principle where the last element added is the first to be removed, like a stack of plates. Operations include push (add to top) and pop (remove from top). A queue follows First-In-First-Out (FIFO) where the first element added is the first removed, like a line at a counter. Operations include enqueue (add to rear) and dequeue (remove from front). Stacks are used in function call management, undo operations, and expression evaluation. Queues are used in BFS, task scheduling, and print job management.',
        },
        {
            id: 2,
            type: 'technical',
            question: 'What is the time complexity of common sorting algorithms? Can you compare Quick Sort and Merge Sort?',
            difficulty: 'Medium',
            expectedTopics: ['O(n log n)', 'divide and conquer', 'in-place', 'stable', 'worst case', 'average case'],
            modelAnswer: 'Quick Sort has an average time complexity of O(n log n) and worst case of O(n²) when the pivot selection is poor. It sorts in-place with O(log n) space. Merge Sort has a consistent O(n log n) in all cases but requires O(n) extra space. Merge Sort is stable (preserves relative order of equal elements) while Quick Sort is not inherently stable. Quick Sort is generally preferred for arrays due to cache efficiency, while Merge Sort is preferred for linked lists and when stability is required.',
        },
        {
            id: 3,
            type: 'behavioral',
            question: 'Tell me about a time when you had to debug a particularly challenging issue in production. How did you approach it?',
            difficulty: 'Medium',
            expectedTopics: ['systematic approach', 'logging', 'reproduction', 'root cause', 'prevention', 'communication'],
            modelAnswer: 'A strong answer would describe the situation clearly, explain the systematic debugging approach (checking logs, reproducing the issue, isolating variables), discuss tools used, how the root cause was identified, the fix implemented, and most importantly, what preventive measures were put in place to avoid similar issues in the future.',
        },
        {
            id: 4,
            type: 'technical',
            question: 'Explain the concept of RESTful APIs. What are the key principles and HTTP methods used?',
            difficulty: 'Easy',
            expectedTopics: ['stateless', 'HTTP methods', 'GET', 'POST', 'PUT', 'DELETE', 'resources', 'endpoints'],
            modelAnswer: 'REST (Representational State Transfer) is an architectural style for designing networked applications. Key principles include: statelessness (each request contains all information needed), uniform interface (consistent URL patterns), resource-based (everything is a resource identified by URI), and use of standard HTTP methods. GET retrieves resources, POST creates new resources, PUT updates existing resources, PATCH partially updates, and DELETE removes resources. RESTful APIs should return appropriate status codes (200, 201, 404, 500) and typically use JSON for data exchange.',
        },
        {
            id: 5,
            type: 'system-design',
            question: 'How would you design a URL shortening service like bit.ly? Walk me through the high-level architecture.',
            difficulty: 'Hard',
            expectedTopics: ['hashing', 'database', 'caching', 'redirection', 'scalability', 'analytics', 'base62'],
            modelAnswer: 'The system needs: 1) A URL shortening algorithm using base62 encoding or MD5 hashing truncated to 7 characters. 2) A database (SQL or NoSQL) to store mappings between short and long URLs. 3) A caching layer (Redis) for frequently accessed URLs. 4) The flow: user submits long URL → generate short code → store mapping → return short URL. On access: receive short URL → check cache → check database → redirect with 301/302. For scalability: use consistent hashing for distribution, read replicas, and CDN. Add analytics tracking for click counts, geography, and referrers.',
        },
    ],
    'data-science': [
        {
            id: 1,
            type: 'technical',
            question: 'Explain the bias-variance tradeoff in machine learning. How does it affect model performance?',
            difficulty: 'Medium',
            expectedTopics: ['underfitting', 'overfitting', 'generalization', 'complexity', 'training error', 'test error'],
            modelAnswer: 'The bias-variance tradeoff is a fundamental concept. Bias is the error from oversimplified assumptions in the model (underfitting), leading to high error on both training and test data. Variance is the error from sensitivity to training data fluctuations (overfitting), where the model performs well on training data but poorly on unseen data. The goal is to find the sweet spot that minimizes total error. Techniques like cross-validation, regularization, and ensemble methods help manage this tradeoff.',
        },
        {
            id: 2,
            type: 'technical',
            question: 'What is the difference between supervised and unsupervised learning? Give examples of each.',
            difficulty: 'Easy',
            expectedTopics: ['labeled data', 'classification', 'regression', 'clustering', 'dimensionality reduction'],
            modelAnswer: 'Supervised learning uses labeled data to train models that predict outcomes. Examples include classification (spam detection, image recognition) and regression (house price prediction, stock forecasting). Unsupervised learning works with unlabeled data to discover patterns. Examples include clustering (customer segmentation, anomaly detection) and dimensionality reduction (PCA for feature reduction). Semi-supervised learning combines both by using a small amount of labeled data with a large amount of unlabeled data.',
        },
        {
            id: 3,
            type: 'technical',
            question: 'How would you handle missing data in a dataset? What are the different strategies?',
            difficulty: 'Medium',
            expectedTopics: ['imputation', 'deletion', 'mean', 'median', 'mode', 'KNN imputation', 'MICE'],
            modelAnswer: 'Strategies include: 1) Deletion - remove rows (listwise) or columns with missing values, suitable when missing data is random and small. 2) Imputation - fill with mean/median (numerical) or mode (categorical). 3) Advanced imputation - KNN imputation uses similar data points, MICE creates multiple imputations. 4) Using algorithms that handle missing data natively like XGBoost. 5) Creating a binary indicator feature for missingness. The choice depends on the percentage of missing data, whether data is missing completely at random (MCAR), at random (MAR), or not at random (MNAR).',
        },
        {
            id: 4,
            type: 'behavioral',
            question: 'Describe a data project where you had to communicate complex findings to non-technical stakeholders.',
            difficulty: 'Medium',
            expectedTopics: ['visualization', 'storytelling', 'simplification', 'business impact', 'actionable insights'],
            modelAnswer: 'A strong answer demonstrates the ability to translate technical results into business language, use effective visualizations, focus on actionable insights rather than methodology details, and show awareness of the audiences needs and knowledge level.',
        },
        {
            id: 5,
            type: 'technical',
            question: 'Explain how a Random Forest algorithm works and when you would choose it over other algorithms.',
            difficulty: 'Medium',
            expectedTopics: ['ensemble', 'bagging', 'decision trees', 'bootstrap', 'feature importance', 'overfitting'],
            modelAnswer: 'Random Forest is an ensemble learning method that builds multiple decision trees using bootstrap aggregation (bagging). Each tree is trained on a random subset of data and features, then predictions are averaged (regression) or voted (classification). Benefits include resistance to overfitting, handling of non-linear relationships, built-in feature importance, and robustness to outliers. Choose it when you need a reliable baseline, interpretable feature importance, or when dealing with mixed data types. It may not be ideal for very high-dimensional sparse data or when real-time prediction speed is critical.',
        },
    ],
    'hr-behavioral': [
        {
            id: 1,
            type: 'behavioral',
            question: 'Tell me about yourself and what motivated you to apply for this position.',
            difficulty: 'Easy',
            expectedTopics: ['background', 'skills', 'motivation', 'alignment', 'career goals'],
            modelAnswer: 'Structure your answer using the Present-Past-Future framework. Start with your current role and key achievements, then briefly cover relevant past experience, and conclude with why this specific role excites you and aligns with your career vision. Keep it within 2 minutes, focusing on relevance to the position.',
        },
        {
            id: 2,
            type: 'behavioral',
            question: 'Describe a situation where you had a conflict with a team member. How did you resolve it?',
            difficulty: 'Medium',
            expectedTopics: ['communication', 'empathy', 'compromise', 'resolution', 'professional growth'],
            modelAnswer: 'Use the STAR method. Describe the Situation and Task clearly, then focus on the Action you took - emphasizing active listening, seeking to understand the other perspective, finding common ground, and proposing solutions. Finally, share the Result - how the relationship improved and what you learned about conflict resolution.',
        },
        {
            id: 3,
            type: 'behavioral',
            question: 'Where do you see yourself in 5 years? How does this role fit into your career plan?',
            difficulty: 'Easy',
            expectedTopics: ['growth', 'leadership', 'skills development', 'company alignment', 'realistic goals'],
            modelAnswer: 'Show ambition tempered with realism. Discuss skills you want to develop, roles you aspire to, and how the company path aligns with those goals. Avoid being too specific (exact titles) or too vague. Show genuine interest in growing within the organization while demonstrating awareness of industry trends.',
        },
        {
            id: 4,
            type: 'behavioral',
            question: 'Give an example of a time when you had to work under significant pressure or tight deadlines.',
            difficulty: 'Medium',
            expectedTopics: ['prioritization', 'time management', 'delegation', 'stress management', 'result delivery'],
            modelAnswer: 'Describe a specific high-pressure scenario, the stakes involved, and your systematic approach to handling it. Highlight prioritization skills, how you broke down the work, communicated with stakeholders about realistic timelines, and ultimately delivered results. Include what you learned about working under pressure.',
        },
        {
            id: 5,
            type: 'behavioral',
            question: 'What is your greatest weakness, and what steps are you taking to improve it?',
            difficulty: 'Medium',
            expectedTopics: ['self-awareness', 'honesty', 'improvement plan', 'growth mindset', 'specific examples'],
            modelAnswer: 'Choose a genuine weakness that is not a core requirement of the role. Be honest and specific, then focus on concrete steps you are taking to improve. Show self-awareness and a growth mindset. Avoid clichéd answers like "I am a perfectionist" and instead discuss real areas of development with measurable improvement strategies.',
        },
    ],
    'product-management': [
        {
            id: 1,
            type: 'technical',
            question: 'How would you prioritize features for a new product release? What frameworks do you use?',
            difficulty: 'Medium',
            expectedTopics: ['RICE', 'MoSCoW', 'impact', 'effort', 'user research', 'data-driven'],
            modelAnswer: 'Feature prioritization involves frameworks like RICE (Reach, Impact, Confidence, Effort), MoSCoW (Must have, Should have, Could have, Wont have), or the Kano Model. Start with user research and data analysis to understand user needs, then score features against business goals and user impact. Consider development effort, time constraints, and dependencies. Communicate priorities clearly to stakeholders with data-backed rationale.',
        },
        {
            id: 2,
            type: 'technical',
            question: 'A key product metric has dropped 20% this week. Walk me through how you would investigate and respond.',
            difficulty: 'Hard',
            expectedTopics: ['root cause analysis', 'data segmentation', 'hypotheses', 'stakeholder communication', 'action plan'],
            modelAnswer: 'First, verify the data is accurate (no tracking issues). Segment the drop by user cohorts, platforms, geographies, and features to isolate the issue. Check for recent deployments, external factors, or seasonal patterns. Form hypotheses and validate with data. Communicate findings transparently to stakeholders. Develop short-term fixes and long-term solutions. Set up monitoring to detect similar issues early.',
        },
        {
            id: 3,
            type: 'behavioral',
            question: 'Tell me about a time you had to make a product decision with incomplete information.',
            difficulty: 'Medium',
            expectedTopics: ['decision framework', 'risk assessment', 'iteration', 'learning', 'stakeholder alignment'],
            modelAnswer: 'Describe the situation and why complete information wasnt available. Explain how you gathered what data you could, assessed risks, consulted experts, and made a calculated decision. Discuss how you set up mechanisms to validate the decision post-launch and what you would do differently with hindsight.',
        },
    ],
    'devops': [
        {
            id: 1,
            type: 'technical',
            question: 'Explain the concept of CI/CD and how it improves the software development lifecycle.',
            difficulty: 'Easy',
            expectedTopics: ['continuous integration', 'continuous deployment', 'automation', 'testing', 'pipeline'],
            modelAnswer: 'CI (Continuous Integration) is the practice of frequently merging code changes into a shared repository, with automated builds and tests running on each merge. CD (Continuous Delivery/Deployment) extends CI by automatically deploying validated changes to staging or production. Benefits include faster release cycles, early bug detection, reduced manual errors, consistent deployments, and improved team collaboration. Tools like Jenkins, GitHub Actions, and GitLab CI facilitate these pipelines.',
        },
        {
            id: 2,
            type: 'technical',
            question: 'What is containerization and how does Docker differ from traditional virtual machines?',
            difficulty: 'Medium',
            expectedTopics: ['containers', 'images', 'isolation', 'lightweight', 'kernel sharing', 'orchestration'],
            modelAnswer: 'Containerization packages application code with all dependencies into a portable unit called a container. Unlike VMs that require a full guest OS with a hypervisor, containers share the host OS kernel, making them much lighter (MBs vs GBs) and faster to start (seconds vs minutes). Docker provides tools to build, ship, and run containers using Dockerfiles and images. While VMs offer stronger isolation through hardware-level separation, containers provide process-level isolation suitable for most microservices architectures.',
        },
        {
            id: 3,
            type: 'technical',
            question: 'How would you design a monitoring and alerting strategy for a production microservices application?',
            difficulty: 'Hard',
            expectedTopics: ['metrics', 'logs', 'traces', 'alerting', 'dashboards', 'SLOs', 'observability'],
            modelAnswer: 'Implement the three pillars of observability: Metrics (Prometheus/Grafana for system and application metrics, SLIs/SLOs), Logs (ELK stack or similar for centralized structured logging), and Traces (Jaeger/Zipkin for distributed tracing across services). Set up alerting based on SLOs with appropriate thresholds to avoid alert fatigue. Create dashboards for different audiences (ops, dev, business). Implement health checks, circuit breakers, and automated runbooks for common issues.',
        },
    ],
    'cybersecurity': [
        {
            id: 1,
            type: 'technical',
            question: 'Explain the difference between symmetric and asymmetric encryption. When would you use each?',
            difficulty: 'Medium',
            expectedTopics: ['AES', 'RSA', 'key exchange', 'performance', 'digital signatures', 'TLS'],
            modelAnswer: 'Symmetric encryption uses the same key for encryption and decryption (e.g., AES). Its fast and efficient for large data but has the key distribution problem. Asymmetric encryption uses a public-private key pair (e.g., RSA) where data encrypted with one key can only be decrypted by the other. Its slower but solves key distribution. In practice, hybrid approaches are used (like TLS) where asymmetric encryption securely exchanges a symmetric session key, then symmetric encryption handles the bulk data transfer.',
        },
        {
            id: 2,
            type: 'technical',
            question: 'What are the OWASP Top 10 vulnerabilities? Describe at least three in detail.',
            difficulty: 'Medium',
            expectedTopics: ['injection', 'broken authentication', 'XSS', 'CSRF', 'security misconfiguration'],
            modelAnswer: 'The OWASP Top 10 includes: 1) Injection (SQL, NoSQL, OS) - untrusted data sent to interpreter; prevent with parameterized queries. 2) Broken Authentication - session management flaws; prevent with MFA, secure session handling. 3) Cross-Site Scripting (XSS) - injecting malicious scripts; prevent with output encoding and CSP. Also important: Insecure Direct Object References, Security Misconfiguration, Sensitive Data Exposure, and Cross-Site Request Forgery.',
        },
        {
            id: 3,
            type: 'behavioral',
            question: 'Describe how you would respond to a security incident where customer data may have been compromised.',
            difficulty: 'Hard',
            expectedTopics: ['incident response', 'containment', 'forensics', 'communication', 'remediation', 'compliance'],
            modelAnswer: 'Follow the incident response framework: 1) Identification - confirm the breach scope and type. 2) Containment - isolate affected systems to prevent further damage. 3) Eradication - remove the threat and patch vulnerabilities. 4) Recovery - restore systems from clean backups. 5) Communication - notify affected parties, legal team, and regulators per compliance requirements (GDPR, etc.). 6) Post-incident - conduct thorough analysis, update security controls, and document lessons learned.',
        },
    ],
};

export const mockInterviewHistory = [
    {
        id: 'int-001',
        domain: 'Software Engineering',
        date: '2026-02-28',
        duration: '22 min',
        overallScore: 82,
        confidenceScore: 75,
        technicalScore: 88,
        communicationScore: 78,
        questionsAnswered: 5,
        status: 'completed',
    },
    {
        id: 'int-002',
        domain: 'Data Science',
        date: '2026-02-25',
        duration: '18 min',
        overallScore: 71,
        confidenceScore: 68,
        technicalScore: 74,
        communicationScore: 70,
        questionsAnswered: 4,
        status: 'completed',
    },
    {
        id: 'int-003',
        domain: 'HR & Behavioral',
        date: '2026-02-20',
        duration: '15 min',
        overallScore: 90,
        confidenceScore: 92,
        technicalScore: 85,
        communicationScore: 93,
        questionsAnswered: 5,
        status: 'completed',
    },
    {
        id: 'int-004',
        domain: 'Software Engineering',
        date: '2026-02-15',
        duration: '20 min',
        overallScore: 65,
        confidenceScore: 58,
        technicalScore: 72,
        communicationScore: 60,
        questionsAnswered: 4,
        status: 'completed',
    },
    {
        id: 'int-005',
        domain: 'DevOps & Cloud',
        date: '2026-02-10',
        duration: '19 min',
        overallScore: 78,
        confidenceScore: 80,
        technicalScore: 76,
        communicationScore: 79,
        questionsAnswered: 3,
        status: 'completed',
    },
];

export const mockReportData = {
    overallScore: 78,
    confidenceScore: 72,
    technicalAccuracy: 84,
    communicationClarity: 76,
    speechPace: 'Moderate',
    wordsPerMinute: 142,
    fillerWordCount: 8,
    fillerWords: { 'um': 3, 'uh': 2, 'like': 2, 'you know': 1 },
    totalDuration: '18:34',
    questionsAnswered: 5,
    strongAreas: [
        'Solid understanding of data structures and their use-cases',
        'Well-structured responses using STAR methodology',
        'Good use of real-world examples to support answers',
    ],
    improvementAreas: [
        'Reduce filler words — detected 8 instances of "um", "uh", "like"',
        'Speak with more confidence on system design topics',
        'Provide more specific technical details in coding-related answers',
        'Work on maintaining consistent speech pace during complex explanations',
    ],
    questionResults: [
        {
            question: 'Explain the difference between a stack and a queue.',
            score: 92,
            feedback: 'Excellent explanation with clear examples. Covered both LIFO and FIFO principles effectively.',
            topicsCovered: ['LIFO', 'FIFO', 'push/pop', 'use cases'],
            topicsMissed: ['dequeue operation details'],
            confidenceLevel: 'High',
        },
        {
            question: 'Compare Quick Sort and Merge Sort.',
            score: 85,
            feedback: 'Good coverage of time complexity differences. Could improve by discussing practical scenarios for choosing one over the other.',
            topicsCovered: ['O(n log n)', 'divide and conquer', 'space complexity'],
            topicsMissed: ['cache efficiency', 'stability'],
            confidenceLevel: 'Medium',
        },
        {
            question: 'Tell me about debugging a challenging production issue.',
            score: 70,
            feedback: 'Response lacked specific details. Use the STAR method more deliberately. Mention specific tools and metrics used.',
            topicsCovered: ['systematic approach', 'logging'],
            topicsMissed: ['root cause analysis', 'prevention measures', 'communication'],
            confidenceLevel: 'Low',
        },
        {
            question: 'Explain RESTful APIs and HTTP methods.',
            score: 88,
            feedback: 'Strong technical explanation. Well-covered HTTP methods and status codes. Could mention authentication methods.',
            topicsCovered: ['HTTP methods', 'stateless', 'resources', 'status codes'],
            topicsMissed: ['HATEOAS', 'versioning'],
            confidenceLevel: 'High',
        },
        {
            question: 'Design a URL shortening service.',
            score: 55,
            feedback: 'Basic approach described but lacked depth in scalability considerations. Need to discuss caching, database choices, and load balancing.',
            topicsCovered: ['hashing', 'database storage'],
            topicsMissed: ['caching', 'scalability', 'analytics', 'base62 encoding'],
            confidenceLevel: 'Low',
        },
    ],
    performanceTrend: [
        { session: 'Session 1', score: 58 },
        { session: 'Session 2', score: 65 },
        { session: 'Session 3', score: 62 },
        { session: 'Session 4', score: 71 },
        { session: 'Session 5', score: 78 },
    ],
    skillRadar: [
        { skill: 'Technical Knowledge', score: 84, fullMark: 100 },
        { skill: 'Communication', score: 76, fullMark: 100 },
        { skill: 'Problem Solving', score: 80, fullMark: 100 },
        { skill: 'Confidence', score: 72, fullMark: 100 },
        { skill: 'Structure', score: 78, fullMark: 100 },
        { skill: 'Time Management', score: 70, fullMark: 100 },
    ],
};

export const userProfile = {
    name: 'Viknesh Kumar',
    email: 'viknesh@example.com',
    avatar: null,
    totalInterviews: 12,
    avgScore: 76,
    streak: 3,
    memberSince: 'January 2026',
    plan: 'Pro',
};

export const features = [
    {
        icon: '🎯',
        title: 'Domain-Specific Questions',
        description: 'AI generates tailored questions for Software Engineering, Data Science, HR, Product Management, and more.',
    },
    {
        icon: '🎤',
        title: 'Real-Time Speech Analysis',
        description: 'Answer via microphone with live transcription. We analyze speech pace, filler words, and tone.',
    },
    {
        icon: '🧠',
        title: 'AI-Powered Evaluation',
        description: 'LLM-based assessment of technical accuracy, relevance, and depth of your responses.',
    },
    {
        icon: '📈',
        title: 'Confidence Scoring',
        description: 'Multi-modal analysis of delivery quality including hesitation patterns and speech consistency.',
    },
    {
        icon: '📋',
        title: 'Detailed Report Cards',
        description: 'Comprehensive performance breakdowns with strengths, improvements, and model answers.',
    },
    {
        icon: '🔄',
        title: 'Adaptive Difficulty',
        description: 'Questions adapt in real-time based on your performance, ensuring optimal challenge level.',
    },
];

export const stats = [
    { label: 'Active Users', value: '12,400+', icon: '👥' },
    { label: 'Interviews Conducted', value: '85,000+', icon: '🎙️' },
    { label: 'Avg Score Improvement', value: '34%', icon: '📈' },
    { label: 'Satisfaction Rate', value: '96%', icon: '⭐' },
];

export const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'Software Engineer at Google',
        text: 'InterviewIQ helped me prepare for my Google interviews. The AI feedback on my communication was incredibly accurate and actionable.',
        rating: 5,
    },
    {
        name: 'Rahul Mehta',
        role: 'Data Scientist at Microsoft',
        text: 'The adaptive questioning really pushed me to my limits. After 10 sessions, my interview confidence completely transformed.',
        rating: 5,
    },
    {
        name: 'Ananya Reddy',
        role: 'Product Manager at Amazon',
        text: 'Best interview prep tool I have used. The confidence scoring helped me identify and fix my nervous habits before the real interviews.',
        rating: 4,
    },
];
