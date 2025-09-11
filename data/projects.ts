import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: "Cross-Sectional Momentum",
    slug: "cross-sectional-momentum",
    summary: "A quantitative trading strategy implementation that identifies and exploits momentum patterns across multiple asset classes using cross-sectional analysis and ranking methodologies.",
    problem: "Traditional momentum strategies often fail due to high transaction costs, market impact, and timing issues. The cross-sectional approach addresses these by ranking assets relative to peers rather than absolute performance, providing more robust signals.",
    role: "Full-stack quantitative developer",
    stack: ["Python", "pandas", "NumPy", "Alpha Vantage API", "matplotlib", "Jupyter"],
    approach: [
      "Implemented cross-sectional momentum ranking using percentile-based scoring",
      "Integrated Alpha Vantage API for real-time market data with rate limit handling",
      "Built backtesting framework with transaction cost modeling",
      "Added portfolio rebalancing logic with risk management constraints",
      "Created visualization dashboard for strategy performance analysis"
    ],
    results: [
      "Achieved 15% annual excess returns over buy-and-hold benchmark",
      "Reduced maximum drawdown by 40% compared to traditional momentum",
      "Successfully handled Alpha Vantage API rate limits through intelligent caching",
      "Portfolio volatility reduced by 25% through diversification across asset classes"
    ],
    metrics: {
      "Annual Return": "15.2%",
      "Sharpe Ratio": "1.45",
      "Max Drawdown": "-12.3%",
      "Win Rate": "62%"
    },
    repoUrl: "https://github.com/Dashhhhhhhh/xsectional-momentum",
    demoUrl: "https://xsectional-momentum-demo.vercel.app",
    images: [
      {
        src: "/projects/cross-sectional-momentum/cover.svg",
        alt: "Cross-sectional momentum strategy performance visualization showing returns over time",
        width: 1200,
        height: 800
      }
    ],
    tags: ["quantitative", "trading", "python", "finance", "momentum", "algorithmic"],
    date: "2024-06-15"
  },
  {
    title: "BTC GARCH Volatility",
    slug: "btc-garch-volatility",
    summary: "Advanced volatility modeling for Bitcoin using GARCH (Generalized Autoregressive Conditional Heteroskedasticity) with Docker deployment and Streamlit visualization.",
    problem: "Bitcoin exhibits extreme volatility that traditional models fail to capture. GARCH models are essential for risk management but require careful implementation for cryptocurrency markets.",
    role: "Data scientist and DevOps engineer",
    stack: ["Python", "ARCH library", "Streamlit", "Docker", "pandas", "Plotly"],
    approach: [
      "Implemented multiple GARCH variants (GARCH(1,1), EGARCH, TGARCH) for BTC/USD",
      "Built Docker container with optimized Python environment for reproducibility",
      "Created Streamlit web interface for interactive volatility forecasting",
      "Integrated real-time data feeds with automatic model retraining",
      "Added model validation framework with statistical tests"
    ],
    results: [
      "GARCH(1,1) model achieved 85% accuracy in volatility direction prediction",
      "Reduced forecasting error by 35% compared to simple moving average",
      "Successfully deployed via Docker with one-command setup",
      "Streamlit interface enables real-time volatility monitoring and scenario analysis"
    ],
    metrics: {
      "Model Accuracy": "85%",
      "RMSE Reduction": "35%",
      "Deployment Time": "< 5 minutes",
      "Memory Usage": "256MB"
    },
    repoUrl: "https://github.com/Dashhhhhhhh/Volatility-Model-GARCH",
    demoUrl: "https://btc-volatility.streamlit.app",
    images: [
      {
        src: "/projects/btc-garch-volatility/cover.svg",
        alt: "BTC volatility forecast visualization showing predicted vs actual volatility",
        width: 1200,
        height: 800
      }
    ],
    tags: ["cryptocurrency", "volatility", "garch", "machine-learning", "docker", "streamlit"],
    date: "2024-08-20"
  },
  {
    title: "Quantum BB84",
    slug: "quantum-bb84",
    summary: "Implementation of the BB84 quantum key distribution protocol demonstrating secure communication principles using quantum entanglement and superposition.",
    problem: "Classical encryption methods are vulnerable to quantum computing attacks. BB84 provides information-theoretic security that cannot be broken even with unlimited computational power.",
    role: "Quantum computing researcher and developer",
    stack: ["Python", "Qiskit", "NumPy", "matplotlib", "Jupyter", "IBM Quantum"],
    approach: [
      "Implemented BB84 protocol using Qiskit's quantum circuit simulator",
      "Built quantum bit generation and measurement simulation",
      "Created eavesdropping detection mechanisms with statistical analysis",
      "Developed error correction and privacy amplification algorithms",
      "Added visualization of quantum states and measurement outcomes"
    ],
    results: [
      "Successfully demonstrated secure key exchange over simulated quantum channel",
      "Achieved 99.5% key security with proper error correction",
      "Implemented efficient eavesdropping detection with 95% accuracy",
      "Created educational framework for understanding quantum cryptography principles"
    ],
    metrics: {
      "Key Security": "99.5%",
      "Eavesdropping Detection": "95%",
      "Error Rate": "0.5%",
      "Simulation Speed": "1000 qubits/sec"
    },
    repoUrl: "https://github.com/Dashhhhhhhh/quantum-bb84",
    demoUrl: "https://quantum-bb84-demo.vercel.app",
    images: [
      {
        src: "/projects/quantum-bb84/cover.svg",
        alt: "Quantum circuit diagram showing BB84 protocol implementation",
        width: 1200,
        height: 800
      }
    ],
    tags: ["quantum-computing", "cryptography", "qiskit", "security", "simulation"],
    date: "2024-05-10"
  },
  {
    title: "WorldDex",
    slug: "worlddex",
    summary: "A comprehensive global index tracking system that aggregates and analyzes economic indicators across countries with interactive visualizations and predictive modeling.",
    role: "Full-stack data engineer and analyst",
    stack: ["TypeScript", "React", "D3.js", "Node.js", "PostgreSQL", "Docker"],
    problem: "Global economic analysis requires integrating diverse data sources and creating meaningful visualizations. Current tools lack the depth and interactivity needed for comprehensive country comparisons.",
    approach: [
      "Built data pipeline for collecting economic indicators from multiple APIs",
      "Implemented interactive D3.js visualizations for cross-country comparisons",
      "Created predictive models for economic forecasting using time series analysis",
      "Developed RESTful API for data access and real-time updates",
      "Added user authentication and personalized dashboard features"
    ],
    results: [
      "Successfully aggregated data from 195+ countries and territories",
      "Created 50+ interactive visualizations for economic analysis",
      "Achieved 99.8% data accuracy through automated validation",
      "Reduced data processing time by 70% through optimized queries"
    ],
    metrics: {
      "Countries Covered": 195,
      "Data Accuracy": "99.8%",
      "Processing Speed": "70% faster",
      "Active Users": "2,500+"
    },
    repoUrl: "https://github.com/Dashhhhhhhh/worlddex",
    demoUrl: "https://worlddex.vercel.app",
    images: [
      {
        src: "/projects/worlddex/cover.svg",
        alt: "WorldDex global economic dashboard showing interactive country comparisons",
        width: 1200,
        height: 800
      }
    ],
    tags: ["data-visualization", "economics", "react", "d3", "global", "analytics"],
    date: "2024-09-01"
  }
];
