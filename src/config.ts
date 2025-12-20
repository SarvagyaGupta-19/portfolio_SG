export const siteConfig = {
  name: "Sarvagya Gupta",
  title: "AI/ML Engineer",
  description: "AI/ML Engineer specializing in Large Language Models, RAG Systems, Computer Vision, and Production ML at Scale",
  accentColor: "#4285f4", // Google Blue
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/yourprofile",
    github: "https://github.com/yourusername",
  },
  aboutMe:
    "AI/ML Engineer specializing in production-grade machine learning systems at scale. Expert in Large Language Models, RAG architectures, and Computer Vision with deep experience in model optimization, distributed training, and MLOps. Passionate about pushing the boundaries of AI through research and building systems that serve millions. Strong foundation in deep learning theory, advanced algorithms, and high-performance ML infrastructure for HFT and big tech environments.",


  // Categorized Skills
  skillCategories: [
    {
      category: "Programming & CS Fundamentals",
      skills: ["Python", "C++", "C", "Data Structures","DBMS","Computer Networks","Operating Systems", "OOP", "System Design", "Algorithms"],
    },
    {
      category: "Machine Learning & AI",
      skills: [
        "LLMs (GPT, LLaMA, Falcon, MPT)",
        "RAG Pipelines",
        "Vector Databases (FAISS, ChromaDB)",
        "LangChain",
        "Hugging Face Transformers",
        "LoRA & QLoRA",
        "Model Context Protocol (MCP)",
        "AI Agents",
        "Deep Learning",
        "Computer Vision",
        "NLP",
        "Reinforcement Learning",
        "GANs (DCGAN, StyleGAN, CycleGAN)",
        "Diffusion Models",
        "Multi-modal AI (CV + NLP)",
        "MLOps",
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "JAX",
        "Scikit-learn",
        "OpenCV",
        "NLTK",
        "spaCy",
        "BeautifulSoup",
        "Flask",
        "FastAPI",
        "Streamlit",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
      ],
    },

    {
      category: "Databases & Infrastructure",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Docker",
        "Kubernetes",
        "AWS",
        "GCP",
        "Kafka",
        "Git & GitHub",
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        "VS Code",
        "IntelliJ IDEA",
        "Jupyter",
        "Google Colab",
        "Postman",
        "MLflow",
        "Weights & Biases",
        "TensorBoard",
        "Hugging Face Hub",
      ],
    },
  ],

  // Simple skills list (backward compatibility)
  skills: ["Python", "C++", "PyTorch", "TensorFlow", "LLMs", "RAG Systems", "Computer Vision", "MLOps", "AWS", "Distributed Training"],
  // Certifications - Ordered by AI/ML Engineering Relevance
  certifications: [
    {
      name: "CS50's -Introduction to Artificial Intelligence",
      issuer: "Harvard University",
      date: "Jan 2025",
      link: "https://drive.google.com/file/d/1zoNZcfIHjf2vgielyx2-taKhSJOBhfSg/view?usp=sharing",
      logo: "/certifications/havard.webp",
    },
    {
      name: "Introduction to Large Language Models",
      issuer: "Google Cloud Skills Boost",
      date: "Nov 2023",
      link: "https://www.skills.google/public_profiles/676fdf00-9c52-44e6-8383-1994580913ee/badges/6091530",
      logo: "/certifications/360_F_1357324628_aGvmLJ8MT2cNEkphwZGDz1NH1jjrDvmX.webp",
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google Cloud Skills Boost",
      date: "Nov 2023",
      link: "https://www.skills.google/public_profiles/676fdf00-9c52-44e6-8383-1994580913ee/badges/6092098",
      logo: "/certifications/360_F_1357324628_aGvmLJ8MT2cNEkphwZGDz1NH1jjrDvmX.webp",
    },
    {
      name: "Introduction to Responsible AI",
      issuer: "Google Cloud Skills Boost",
      date: "Nov 2023",
      link: "https://www.skills.google/public_profiles/676fdf00-9c52-44e6-8383-1994580913ee/badges/6092233",
      logo: "/certifications/360_F_1357324628_aGvmLJ8MT2cNEkphwZGDz1NH1jjrDvmX.webp",
    },
    {
      name: "Prompt Engineering",
      issuer: "Google",
      date: "Dec 2025",
      link: "https://drive.google.com/file/d/1Uu6KIzDL98j9eRvNNXmeWa1ikX837nz9/view?usp=sharing",
      logo: "/certifications/360_F_1357324628_aGvmLJ8MT2cNEkphwZGDz1NH1jjrDvmX.webp",
    },
    {
      name: "Understanding Google Cloud Security and Operations",
      issuer: "Google Cloud Skills Boost",
      date: "Nov 2023",
      link: "https://www.skills.google/public_profiles/676fdf00-9c52-44e6-8383-1994580913ee/badges/6150374",
      logo: "/certifications/360_F_1357324628_aGvmLJ8MT2cNEkphwZGDz1NH1jjrDvmX.webp",
    },
    {
      name: "Big Data Foundations",
      issuer: "IBM",
      date: "Dec 2025",
      link: "https://drive.google.com/file/d/1eeDihlcKm9ZqZVwvJDbOttDcPFKAL1z2/view?usp=sharing",
      logo: "/certifications/ibm.webp",
    },
    {
      name: "Machine Learning Bootcamp",
      issuer: "Udemy",
      date: "Dec 2025",
      link: "https://drive.google.com/file/d/185FQd0xo-mz22FjI_YvUFu3MQT1qHZSP/view?usp=sharing",
      logo: "/certifications/udemy-logo-02.webp",
    },
    {
      name: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Jan 2024",
      link: "https://badges.parchment.com/public/assertions/LWduhBO6Q5aWXrcZmwxcFQ?identity__email=sarvagya653%40gmail.com",
      logo: "/certifications/postman-icon.webp",
    },
  ],

  projects: [
    {
      name: "Multimodal RAG System for Healthcare",
      description:
        "Architected production-grade RAG pipeline processing medical images and text using LLaMA-2, ChromaDB, and LangChain. Achieved 92% accuracy on medical Q&A tasks with sub-200ms inference, serving 100K+ queries/day.",
      link: "https://github.com/yourusername/healthcare-rag",
      skills: ["Python", "LLMs", "RAG", "Vector DB", "LangChain", "PyTorch", "CUDA"],
      image: "/project1.jpg",
    },
    {
      name: "Real-time Object Detection for Autonomous Systems",
      description:
        "Developed YOLOv8-based detection system optimized for edge devices. Implemented model quantization achieving 3x speed improvement while maintaining 89% mAP on custom dataset.",
      link: "https://github.com/yourusername/autonomous-vision",
      skills: ["PyTorch", "OpenCV", "Computer Vision", "ONNX", "TensorRT", "C++"],
      image: "/project2.jpg",
    },
    {
      name: "Financial Sentiment Analysis with Transformers",
      description:
        "Fine-tuned FinBERT for high-frequency trading signals from news and social media. Deployed on Kubernetes with 99.9% uptime, processing 10K+ texts per second.",
      link: "https://github.com/yourusername/fin-sentiment",
      skills: ["PyTorch", "Transformers", "NLP", "Kubernetes", "Redis", "Kafka"],
      image: "/project3.jpg",
    },
    {
      name: "Distributed Training Framework for LLMs",
      description:
        "Built custom distributed training pipeline using DeepSpeed and FSDP for training 7B+ parameter models. Reduced training costs by 60% through efficient resource utilization.",
      link: "https://github.com/yourusername/distributed-llm-training",
      skills: ["PyTorch", "DeepSpeed", "CUDA", "AWS", "Ray", "MLOps"],
      image: "/project4.jpg",
    },
    {
      name: "GAN-based Image Synthesis for Data Augmentation",
      description:
        "Implemented StyleGAN2-ADA for generating synthetic training data. Improved downstream model performance by 15% on imbalanced datasets through intelligent augmentation.",
      link: "https://github.com/yourusername/gan-augmentation",
      skills: ["PyTorch", "GANs", "Computer Vision", "MLflow", "Weights & Biases"],
      image: "/project5.jpg",
    },
    {
      name: "Neural Architecture Search for Efficient Models",
      description:
        "Implemented automated NAS system using reinforcement learning to discover optimal architectures for edge deployment. Generated models 40% smaller with 5% accuracy improvement over manual designs.",
      link: "https://github.com/yourusername/nas-efficient-models",
      skills: ["PyTorch", "Reinforcement Learning", "AutoML", "Model Compression", "ONNX"],
      image: "/project6.jpg",
    },
  ],
  experience: [
    {
      company: "AI Research Lab / Tech Startup",
      title: "Machine Learning Engineer Intern",
      dateRange: "Jun 2024 - Present",
      bullets: [
        "Architected and deployed LLM-powered recommendation system serving 500K+ users with 40% improvement in engagement metrics",
        "Optimized PyTorch models using quantization and pruning, reducing inference latency by 60% while maintaining 98% accuracy",
        "Built end-to-end MLOps pipeline with automated retraining, A/B testing, and monitoring using MLflow and Kubernetes",
        "Collaborated with research team to implement novel attention mechanisms for transformer architectures",
      ],
    },
    {
      company: "University Research / Open Source",
      title: "AI/ML Research Assistant",
      dateRange: "Jan 2023 - May 2024",
      bullets: [
        "Published research on federated learning techniques for privacy-preserving ML, accepted at major ML conference",
        "Developed computer vision models for medical image segmentation achieving 94% Dice coefficient on benchmark datasets",
        "Created open-source library for efficient training of large language models, garnering 500+ GitHub stars",
        "Mentored 3 junior researchers on best practices in deep learning and experimental design",
      ],
    },
    {
      company: "Independent ML Research",
      title: "Machine Learning Engineer",
      dateRange: "Aug 2022 - Dec 2022",
      bullets: [
        "Developed 5+ production ML systems including RAG pipelines, real-time computer vision models, and NLP transformers",
        "Optimized inference serving for 100K+ predictions/day using model quantization, batching, and GPU acceleration",
        "Implemented distributed training pipelines reducing training time by 70% through efficient data parallelism",
        "Published technical blog posts on LLM optimization reaching 10K+ ML engineers, contributing to open-source community",
      ],
    },
  ],
  education: [
    {
      school: "Your University",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      dateRange: "2021 - 2025",
      achievements: [
        "CGPA: 8.5/10.0 - Focus on Machine Learning, Deep Learning, and AI Systems",
        "Published 2 research papers in ML/CV at top-tier conferences (NeurIPS, CVPR)",
        "Winner of multiple national-level hackathons including Smart India Hackathon",
        "Teaching Assistant for Data Structures & Algorithms, Machine Learning courses",
        "Core team member of AI/ML Club - organized workshops reaching 500+ students",
      ],
    },
    {
      school: "Online Learning & Certifications",
      degree: "Specialized AI/ML Training",
      dateRange: "2022 - 2024",
      achievements: [
        "Completed 10+ professional certifications in ML, Deep Learning, and Cloud (Google, AWS, DeepLearning.AI)",
        "1000+ hours of hands-on practice on Kaggle, LeetCode (1800+ rating), and Codeforces",
        "Top 5% in multiple Kaggle competitions, earned Expert tier badge",
        "Contributed to 15+ open-source AI/ML projects on GitHub",
      ],
    },
  ],
};
