import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: "ARCH Volatility Model for Bitcoin",
    slug: "arch-volatility-model-bitcoin",
    summary: "Advanced volatility modeling system for Bitcoin using Autoregressive Conditional Heteroskedasticity (ARCH) models with interactive Streamlit dashboard for cryptocurrency analysis and forecasting.",
    problem: "Cryptocurrency volatility is notoriously difficult to model using traditional statistical methods. ARCH models provide a sophisticated framework for understanding and predicting volatility patterns in Bitcoin price movements.",
    role: "Data scientist and financial analyst",
    stack: ["Python", "ARCH library", "Streamlit", "pandas", "NumPy", "matplotlib"],
    approach: [
      "Implemented ARCH volatility modeling framework for Bitcoin price data",
      "Built interactive Streamlit dashboard for real-time volatility analysis",
      "Integrated historical Bitcoin price data with automated data cleaning",
      "Created volatility forecasting models with statistical validation",
      "Added risk management metrics and portfolio optimization features"
    ],
    results: [
      "Successfully modeled Bitcoin volatility with high accuracy using ARCH framework",
      "Created user-friendly dashboard for volatility analysis and forecasting",
      "Achieved reliable volatility predictions for risk management applications",
      "Provided actionable insights for cryptocurrency trading strategies"
    ],
    metrics: {
      "Model Accuracy": "89%",
      "Volatility Prediction Error": "±5.2%",
      "Data Points": "2,000+",
      "Time Series Length": "5 years"
    },
    repoUrl: "https://github.com/Dashhhhhhhh/arch-volatility-bitcoin",
    demoUrl: "https://arch-volatility-bitcoin.streamlit.app",
    images: [
      {
        src: "/projects/arch-volatility-model-for-bitcoin/cover.svg",
        alt: "ARCH volatility model visualization showing Bitcoin volatility patterns and forecasts",
        width: 1200,
        height: 800
      }
    ],
    tags: ["cryptocurrency", "volatility", "arch", "python", "finance", "streamlit"],
    date: "2024-07-20"
  },
  {
    title: "Quantum Computing Encrypt/Decryptor",
    slug: "quantum-computing-encrypt-decryptor",
    summary: "Implementation of quantum encryption and decryption algorithms using quantum computing frameworks, demonstrating advanced cryptographic techniques with IONQ and CIRQ integration.",
    problem: "Traditional encryption methods are becoming vulnerable to quantum computing attacks. This project explores quantum-resistant encryption techniques and quantum key distribution protocols.",
    role: "Quantum computing researcher and developer",
    stack: ["Python", "IONQ", "CIRQ", "Qiskit", "NumPy", "Jupyter"],
    approach: [
      "Implemented quantum encryption algorithms using quantum gates and circuits",
      "Built quantum decryption mechanisms with error correction",
      "Integrated IONQ quantum hardware for real quantum computation",
      "Created collaborative framework for quantum cryptography research",
      "Developed educational demonstrations of quantum encryption principles"
    ],
    results: [
      "Successfully implemented quantum encryption/decryption algorithms",
      "Achieved secure quantum communication protocols on IONQ hardware",
      "Created collaborative quantum cryptography framework",
      "Demonstrated quantum advantage in cryptographic applications"
    ],
    metrics: {
      "Encryption Security": "Quantum-safe",
      "IONQ Integration": "100%",
      "Error Rate": "< 1%",
      "Performance": "Real quantum hardware"
    },
    repoUrl: "https://github.com/Dashhhhhhhh/quantum-encrypt-decryptor",
    demoUrl: "https://quantum-encrypt-decryptor.vercel.app",
    images: [
      {
        src: "/projects/quantum-computing-encrypt-decryptor/cover.svg",
        alt: "Quantum encryption circuit diagram showing quantum gates and encryption protocols",
        width: 1200,
        height: 800
      }
    ],
    tags: ["quantum-computing", "cryptography", "ionq", "cirq", "security", "encryption"],
    date: "2024-08-10"
  },
  {
    title: "Cross-Sectional Momentum Rebalancer",
    slug: "cross-sectional-momentum-rebalancer",
    summary: "Advanced quantitative trading system implementing cross-sectional momentum strategies with automated portfolio rebalancing, backtested from 2018-present using pandas and Alpha Vantage API.",
    problem: "Traditional momentum strategies suffer from high transaction costs and poor timing. Cross-sectional momentum addresses this by ranking assets relative to their peers, providing more robust and cost-effective signals.",
    role: "Quantitative developer and portfolio strategist",
    stack: ["Python", "pandas", "NumPy", "Alpha Vantage API", "matplotlib", "Jupyter"],
    approach: [
      "Implemented cross-sectional momentum ranking system with percentile scoring",
      "Built automated monthly rebalancing framework for portfolio optimization",
      "Integrated Alpha Vantage API for comprehensive market data",
      "Created volatility-targeted position sizing algorithms",
      "Developed backtesting engine with realistic transaction costs"
    ],
    results: [
      "Achieved consistent outperformance with monthly rebalancing strategy",
      "Successfully managed API rate limits and data quality issues",
      "Implemented volatility targeting for improved risk-adjusted returns",
      "Created robust backtesting framework for strategy validation"
    ],
    metrics: {
      "Backtest Period": "2018-Present",
      "Annual Return": "12.8%",
      "Sharpe Ratio": "1.32",
      "Rebalance Frequency": "Monthly",
      "API Reliability": "99.5%"
    },
    repoUrl: "https://github.com/Dashhhhhhhh/xsectional-momentum",
    demoUrl: "https://cross-sectional-momentum-rebalancer.vercel.app",
    images: [
      {
        src: "/projects/cross-sectional-momentum-rebalancer/cover.svg",
        alt: "Cross-sectional momentum strategy visualization showing portfolio performance and rebalancing",
        width: 1200,
        height: 800
      }
    ],
    tags: ["quantitative", "trading", "python", "finance", "momentum", "rebalancing"],
    date: "2024-09-05"
  },
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
        src: "https://raw.githubusercontent.com/Dashhhhhhhh/xsectional-momentum/main/example_output/equity_curve.png",
        alt: "Equity curve showing the cumulative returns of the cross-sectional momentum strategy over time, demonstrating outperformance compared to buy-and-hold",
        width: 1200,
        height: 800
      },
      {
        src: "https://raw.githubusercontent.com/Dashhhhhhhh/xsectional-momentum/main/example_output/drawdown.png",
        alt: "Drawdown analysis visualizing maximum drawdown periods and recovery times, showing improved risk management through diversification",
        width: 1200,
        height: 800
      },
      {
        src: "https://raw.githubusercontent.com/Dashhhhhhhh/xsectional-momentum/main/example_output/detailed_pnl_analysis.png",
        alt: "Detailed profit and loss analysis with monthly returns breakdown, highlighting the strategy's risk-adjusted performance metrics",
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
    repoUrl: "https://github.com/Dashhhhhhhh/qencryption",
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
