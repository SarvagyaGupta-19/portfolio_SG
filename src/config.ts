import type { SiteConfig } from "./types/config";

export const siteConfig: SiteConfig = {
  name: "Sarvagya Gupta",
  profileImage: "/profile.jpeg",
  title: "AI/ML Engineer",
  description: "AI/ML Engineer specializing in Large Language Models, RAG Systems, Computer Vision, and Production ML at Scale",
  summary:
    "Final-year CS student who architected a 4-agent LLM research pipeline (LangGraph, LLaMA-3 70B) driving a 22x speedup in research workflows. Engineered a hybrid RAG system for SEC filings (0.79 answer relevancy) and fine-tuned CV models (96.4% F1). Interned at SkillCraft Technology, scaling a TensorFlow inference API to 10K+ daily requests and reducing model rollback times by 40%. Ranked 5th at CodeSrijn 2026 National AI Hackathon.",
  accentColor: "#c0392b",
  social: {
    email: "sarvagya653@gmail.com",
    linkedin: "https://www.linkedin.com/in/sarvagyagupta019",
    twitter: "https://x.com/Sarvagya__Gupta",
    github: "https://github.com/SarvagyaGupta-19",
    codolio: "https://codolio.com/profile/_SarvagyaGupta",
  },
  resumeLink: "/sarvagya_gupta_resume.pdf",
  about: [
    "Building AI that actually works! Currently deep into Large-Language Models and Agentic Systems, with hands-on experience taking AI projects from wild ideas to real products.",
    "Love tinkering with model fine-tuning and cloud deployments. Big open-source enthusiast - you'll find me contributing to projects that make AI more accessible to everyone."
  ],

  skillCategories: [
    {
      category: "AI/ML/DL",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenCV",
        "NLP",
        "Computer Vision",
        "Deep Learning",
        "Reinforcement Learning",
        "GANs",
        "Diffusion Models",
      ],
    },
    {
      category: "Python Libs",
      skills: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Flask",
        "FastAPI",
        "Streamlit",
        "BeautifulSoup",
        "NLTK",
        "spaCy",
        "Keras",
      ],
    },
    {
      category: "GenAI & LLMs",
      skills: [
        "LangChain",
        "LangGraph",
        "Ollama",
        "RAG",
        "Hugging Face Transformers",
        "LoRA & QLoRA",
        "Mem0",
        "RAGAS",
        "LangSmith",
      ],
    },
    {
      category: "Cloud",
      skills: [
        "AWS",
        "AWS EC2",
        "AWS S3",
        "GCP",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "CI/CD",
      ],
    },
    {
      category: "Databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Qdrant",
        "Pinecone",
        "FAISS",
        "ChromaDB",
        "Redis",
      ],
    },
    {
      category: "Languages",
      skills: [
        "Python",
        "C++",
        "C",
        "SQL",
        "Bash/Shell",
        "TypeScript",
        "JavaScript",
      ],
    },
    {
      category: "Dev Tools",
      skills: [
        "Git",
        "Pytest",
        "Weights & Biases",
        "MLflow",
        "TensorBoard",
        "Postman",
        "Jupyter",
        "VS Code",
      ],
    },
  ],


  certifications: [
    {
      name: "CS50's Introduction to Artificial Intelligence",
      issuer: "Harvard University",
      date: "Jan 2025",
      link: "https://certificates.cs50.io/bf869820-8676-4c18-b21d-ad7572839dbe.pdf?size=letter",
      logo: "/certifications/1631318058235.jpg",
    },
    {
      name: "Introduction to Large Language Models",
      issuer: "Google Cloud Skills Boost",
      date: "Nov 2023",
      link: "https://www.skills.google/public_profiles/676fdf00-9c52-44e6-8383-1994580913ee/badges/6091530",
      logo: "/certifications/google_logo.jpg",
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud Skills Boost",
      date: "Nov 2023",
      link: "https://www.skills.google/public_profiles/676fdf00-9c52-44e6-8383-1994580913ee/badges/6092098",
      logo: "/certifications/google_logo.jpg",
    },
    {
      name: "Introduction to Responsible AI",
      issuer: "Google Cloud Skills Boost",
      date: "Nov 2023",
      link: "https://www.skills.google/public_profiles/676fdf00-9c52-44e6-8383-1994580913ee/badges/6092233",
      logo: "/certifications/google_logo.jpg",
    },
    {
      name: "Prompt Engineering",
      issuer: "Google",
      date: "Dec 2025",
      link: "https://drive.google.com/file/d/1Uu6KIzDL98j9eRvNNXmeWa1ikX837nz9/view?usp=sharing",
      logo: "/certifications/google_logo.jpg",
    },
    {
      name: "Understanding Google Cloud Security and Operations",
      issuer: "Google Cloud Skills Boost",
      date: "Nov 2023",
      link: "https://www.skills.google/public_profiles/676fdf00-9c52-44e6-8383-1994580913ee/badges/6150374",
      logo: "/certifications/google_logo.jpg",
    },
    {
      name: "Big Data Foundations",
      issuer: "IBM",
      date: "Dec 2025",
      link: "https://drive.google.com/file/d/1eeDihlcKm9ZqZVwvJDbOttDcPFKAL1z2/view?usp=sharing",
      logo: "/certifications/ibm_logo.jpg",
    },
    {
      name: "Machine Learning Bootcamp",
      issuer: "Udemy",
      date: "Dec 2025",
      link: "https://drive.google.com/file/d/185FQd0xo-mz22FjI_YvUFu3MQT1qHZSP/view?usp=sharing",
      logo: "/certifications/udemy_logo.jpg",
    },
    {
      name: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Jan 2024",
      link: "https://badges.parchment.com/public/assertions/LWduhBO6Q5aWXrcZmwxcFQ?identity__email=sarvagya653%40gmail.com",
      logo: "/certifications/6934042159649_ac803d1cddbcbef8f110_512.png",
    },
  ],

  projects: [
    {
      name: "Multi-Agent Research System",
      description:
        "4-agent LLM research pipeline (LangGraph, LLaMA-3 70B) that automates web search and synthesis, reducing average research time from 30 minutes to 80 seconds — a 22x speedup. 66.5% fact-check pass rate with dedicated verification agent.",
      link: "https://github.com/SarvagyaGupta-19/Multi-agent-research-system",
      liveDemo: "https://multi-agent-research-system-one.vercel.app/",
      skills: ["Python", "LangGraph", "FastAPI", "AWS EC2", "LLaMA-3 70B", "Mem0"],
    },
    {
      name: "RAG Eval Studio",
      description:
        "Hybrid RAG system (Qdrant, BM25) to query 5,500+ pages of SEC filings, achieving 0.64 context precision and 0.79 answer relevancy. Benchmarked against a 70B judge model using RAGAS.",
      link: "https://github.com/SarvagyaGupta-19/rag-eval-studio",
      liveDemo: "https://rag-eval-studio.vercel.app/",
      skills: ["Python", "Qdrant", "RAGAS", "LangSmith", "LangChain", "AWS S3"],
    },
    {
      name: "Plant Disease Classification",
      description:
        "Fine-tuned MobileNetV2 on 3,000 PlantVillage images using transfer learning, achieving 96.4% test accuracy and 0.964 F1-score. Async FastAPI microservice delivers predictions in ~160ms.",
      link: "https://github.com/SarvagyaGupta-19/Potato-Disease-Classification-",
      liveDemo: "https://blight-detection-in-leaves.vercel.app/",
      skills: ["Python", "CNNs", "TensorFlow", "FastAPI", "Docker"],
    },
    {
      name: "Datafort AI",
      description:
        "Blockchain-based secure data sharing platform built at CodeSrijn 2026 National AI Hackathon. Ranked 5th among 50+ teams.",
      link: "",
      liveDemo: "https://blockchain-based-secure-data-sharin.vercel.app/",
      skills: ["AI", "Blockchain", "Security"],
    },
    {
      name: "Anomaly Detection System",
      description: "Unsupervised anomaly detection in machine sounds. Learns normal operation patterns and flags deviations (friction, leaks, wear) using digital signal processing (DSP) and Deep Learning.",
      link: "https://github.com/SarvagyaGupta-19/Anomaly-Detection-System",
      liveDemo: "",
      skills: ["Deep Learning", "DSP", "Anomaly Detection"],
    },
    {
      name: "GAN For Video Enhancement",
      description: "A modular 12-stage pipeline combining classical computer vision and deep learning for high-quality video restoration. Uses FastDVDNet, RealESRGAN, and GFPGAN for denoising and super-resolution.",
      link: "https://github.com/SarvagyaGupta-19/GAN-For-Video-Enhancement",
      liveDemo: "",
      skills: ["Computer Vision", "GANs", "RealESRGAN", "GFPGAN"],
    },
  ],

  experience: [
    {
      company: "SkillCraft Technology",
      title: "Machine Learning Intern",
      dateRange: "June 2025 — August 2025",
      type: "Remote, Mumbai, Maharashtra",
      logo: "/1714573558835.jpg",
      bullets: [
        "Engineered a core TensorFlow image classification API to automate production workflows, scaling it to handle 10,000+ daily inference requests by containerizing the model behind FastAPI.",
        "Automated model deployment cycles via a GitHub Actions CI/CD pipeline, utilizing Docker and TensorFlow Serving to reduce version rollback times by 40% (from 30m to 18m).",
        "Fortified pipeline reliability by integrating Pytest and Bandit static analysis, catching 15+ critical logic and security vulnerabilities.",
      ],
      githubLink: "",
    },
  ],

  education: [
    {
      school: "Jaypee University of Engineering and Technology",
      degree: "Bachelor's Degree in Computer Science Engineering",
      dateRange: "2023 — 2027",
      logo: "/1631396984787.jpg",
      achievements: [
        "CGPA: 8.2/10.0 — Micro Specialization in Machine Learning and Artificial Intelligence",
      ],
    },
  ],
};
