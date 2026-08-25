// Gyanexia Study Platform Database
const GyanData = {
  announcements: [
    { text: "🏆 Gyanexia Talent Hunt 2026 is Coming This December – Registrations Opening Soon! Win Scholarships, Laptops & NIT Patna Mentorship!", tag: "Talent Hunt 2026" },
    { text: "✨ Free Mathematics & Olympiad Foundation Live Sessions every weekend for Class 5 to 10.", tag: "Live Classes" },
    { text: "📚 500+ Practice DPPs, Formula Cheat Sheets and PYQs now live in the Study Material Hub.", tag: "Study Resources" }
  ],

  programs: [
    {
      id: "basic-maths",
      title: "Basic Mathematics",
      subtitle: "Foundation Mastery for Young Minds",
      badge: "Maths",
      badgeColor: "bg-blue-600",
      image: "assets/images/basic_math.png",
      description: "Designed for Class 5th & 6th students. Learn arithmetic, fractions, decimals, percentages and problem-solving skills through interactive lessons.",
      classes: "Class 5-6",
      level: "Foundation",
      duration: "8 Weeks",
      lectures: 24,
      studentsEnrolled: "4,280+",
      rating: 4.9,
      syllabus: [
        { title: "Module 1: Number Sense & Master Arithmetic", topics: ["Place values up to 7 digits", "Speed addition & mental subtraction", "Smart multiplication algorithms", "Long division mastery & remainders"] },
        { title: "Module 2: Fractions, Decimals & Percentages", topics: ["Visualizing fractions & equivalent fractions", "Operations on mixed fractions", "Decimal arithmetic & conversions", "Real-world percentages & discounts"] },
        { title: "Module 3: Geometry & Spatial Thinking", topics: ["Lines, angles & triangles", "Perimeter & area of 2D shapes", "Symmetry, reflections and rotational patterns"] },
        { title: "Module 4: Olympiad Problem-Solving", topics: ["Pattern recognition", "Logical word problems", "Time, distance & clock puzzles"] }
      ]
    },
    {
      id: "advanced-maths",
      title: "Advanced Mathematics",
      subtitle: "Olympiad, NTSE & Deep Concept Building",
      badge: "Maths",
      badgeColor: "bg-blue-600",
      image: "assets/images/adv_math.png",
      description: "For Class 8th to 10th students. Strengthen algebra, geometry, reasoning and Olympiad-level thinking with advanced concepts and problem solving.",
      classes: "Class 8-10",
      level: "Advanced",
      duration: "12 Weeks",
      lectures: 36,
      studentsEnrolled: "5,890+",
      rating: 5.0,
      syllabus: [
        { title: "Module 1: Advanced Algebraic Structures", topics: ["Polynomial factoring & remainder theorem", "Quadratic equations & nature of roots", "Systems of linear equations with 2-3 variables", "Sequence & Series (AP, GP, Telescoping sums)"] },
        { title: "Module 2: Geometry & Trigonometry", topics: ["Euclidean geometry & circle theorems", "Similar triangles & Menelaus theorem", "Trigonometric identities & Heights-Distances", "Coordinate geometry & analytical proofs"] },
        { title: "Module 3: Number Theory & Combinatorics", topics: ["Prime factorization & modular arithmetic", "GCD, LCM & Euclidean algorithm", "Permutations, combinations & Pigeonhole Principle", "Divisibility rules & Diophantine equations"] },
        { title: "Module 4: Competitive Exam Strategies", topics: ["PRMO & RMO question breakdowns", "IIT Foundation problem sets", "Speed calculation shortcuts"] }
      ]
    },
    {
      id: "summer-camp-26",
      title: "GYANEXIA SUMMER CAMP '26",
      subtitle: "Holistic Skills, AI & Creative Innovation",
      badge: "Summer Camp",
      badgeColor: "bg-indigo-600",
      image: "assets/images/summer_camp.png",
      description: "FREE Online Summer Camp for students of Class 5th to 10th. Learn Basic Maths, AI Basics, Communication Skills, Creativity, Life Skills and Teamwork with expert teachers.",
      classes: "Class 5-10",
      level: "All Levels",
      duration: "25 May - 15 June",
      lectures: 20,
      studentsEnrolled: "7,150+",
      rating: 4.95,
      syllabus: [
        { title: "Week 1: AI & Future Technology", topics: ["How Artificial Intelligence works", "Prompt engineering & creative AI tools", "Basic coding logic with Python/Scratch"] },
        { title: "Week 2: Speed Mathematics & Vedic Tricks", topics: ["Multiplication in 2 seconds", "Square roots & cube roots shortcuts", "Math puzzles and escape rooms"] },
        { title: "Week 3: Public Speaking & Communication", topics: ["Overcoming stage fright", "Structuring 2-minute elevator pitches", "Storytelling & debate essentials"] },
        { title: "Week 4: Science Experiments & Project Showcase", topics: ["DIY hands-on science at home", "Team collaboration & project presentation", "Grand Gyanexia Summer Camp Hackathon"] }
      ]
    },
    {
      id: "stem-science",
      title: "Junior Science & STEM Explorer",
      subtitle: "Conceptual Physics, Chemistry & Biology",
      badge: "Science",
      badgeColor: "bg-emerald-600",
      image: "assets/images/classroom_exam.png",
      description: "Comprehensive science foundation for Class 7th-10th. Deep dive into mechanics, optics, chemical reactions, cell biology, and experimental lab reasoning.",
      classes: "Class 7-10",
      level: "Intermediate",
      duration: "10 Weeks",
      lectures: 30,
      studentsEnrolled: "3,450+",
      rating: 4.88,
      syllabus: [
        { title: "Module 1: Physics Mechanics & Energy", topics: ["Kinematics & Laws of Motion", "Gravitation, Work & Power", "Light, Mirrors & Lenses", "Electricity & Magnetism"] },
        { title: "Module 2: Chemical Fundamentals", topics: ["Atomic structure & periodic trends", "Chemical bonding & stoichiometry", "Acids, bases & salts", "Carbon & its compounds"] },
        { title: "Module 3: Life Processes & Genetics", topics: ["Cell structure & division", "Nutrition, respiration & circulation", "Heredity & evolution"] }
      ]
    },
    {
      id: "mental-ability",
      title: "Logical Reasoning & Mental Ability",
      subtitle: "Ace NTSE, NMMS & Talent Hunt Exams",
      badge: "Reasoning",
      badgeColor: "bg-purple-600",
      image: "assets/images/adv_math.png",
      description: "Master MAT (Mental Ability Test) concepts including series completion, analogies, coding-decoding, blood relations, non-verbal matrices, and direction sense.",
      classes: "Class 6-12",
      level: "All Levels",
      duration: "6 Weeks",
      lectures: 18,
      studentsEnrolled: "6,100+",
      rating: 4.92,
      syllabus: [
        { title: "Module 1: Verbal Reasoning", topics: ["Number & letter series", "Coding-decoding & cyphers", "Blood relations & family trees", "Direction sense & seating arrangement"] },
        { title: "Module 2: Non-Verbal Reasoning", topics: ["Figure matrices & series", "Paper folding & cutting", "Mirror & water images", "Cube & dice visualization"] }
      ]
    }
  ],

  mockTests: [
    {
      id: "talent-hunt-2026-sample",
      title: "Gyanexia Talent Hunt 2026 - Official Diagnostic Test",
      classes: "Class 8-10",
      category: "Talent Hunt",
      durationMinutes: 15,
      totalQuestions: 8,
      marksPerQuestion: 4,
      negativeMarks: 1,
      difficulty: "Medium to Hard",
      description: "Official diagnostic sample test for Gyanexia Talent Hunt 2026 covering Advanced Math, Physics, and Mental Ability.",
      questions: [
        {
          id: 1,
          question: "If the roots of the quadratic equation x^2 - 7x + k = 0 differ by 3, what is the value of k?",
          options: ["k = 10", "k = 12", "k = 8", "k = 6"],
          correct: 0,
          explanation: "Let roots be α and β. Sum α+β = 7, difference |α-β| = 3. Using (α-β)² = (α+β)² - 4αβ => 3² = 7² - 4k => 9 = 49 - 4k => 4k = 40 => k = 10."
        },
        {
          id: 2,
          question: "A train of length 150 m crosses a 350 m long bridge in 25 seconds. What is the speed of the train in km/h?",
          options: ["60 km/h", "72 km/h", "84 km/h", "90 km/h"],
          correct: 1,
          explanation: "Total distance = 150 m + 350 m = 500 m. Time = 25 s. Speed = 500/25 = 20 m/s. In km/h: 20 × (18/5) = 72 km/h."
        },
        {
          id: 3,
          question: "Find the next term in the logical sequence: 3, 7, 15, 31, 63, ?",
          options: ["125", "127", "129", "131"],
          correct: 1,
          explanation: "Pattern: Each term is 2n + 1. 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63, 63×2+1=127."
        },
        {
          id: 4,
          question: "An object of mass 2 kg moving at 10 m/s collides and sticks to a stationary 3 kg block on a frictionless surface. What is their common final velocity?",
          options: ["2 m/s", "4 m/s", "5 m/s", "6 m/s"],
          correct: 1,
          explanation: "By conservation of momentum: m₁v₁ + m₂v₂ = (m₁+m₂)V => (2)(10) + (3)(0) = (2+3)V => 20 = 5V => V = 4 m/s."
        },
        {
          id: 5,
          question: "In a right triangle ABC, ∠B = 90°, AB = 6 cm and BC = 8 cm. What is the radius of the incircle (inradius r)?",
          options: ["1.5 cm", "2.0 cm", "2.5 cm", "3.0 cm"],
          correct: 1,
          explanation: "Hypotenuse AC = √(6² + 8²) = 10 cm. Inradius r = (a + b - c)/2 = (6 + 8 - 10)/2 = 4/2 = 2.0 cm."
        },
        {
          id: 6,
          question: "If log₂(x - 1) + log₂(x + 1) = 3, what is the value of positive real x?",
          options: ["x = 3", "x = 4", "x = √7", "x = 9"],
          correct: 0,
          explanation: "log₂((x-1)(x+1)) = 3 => log₂(x² - 1) = 3 => x² - 1 = 2³ = 8 => x² = 9 => x = 3 (since x > 1)."
        },
        {
          id: 7,
          question: "Which of the following elements has the highest first ionization enthalpy?",
          options: ["Sodium (Na)", "Magnesium (Mg)", "Helium (He)", "Chlorine (Cl)"],
          correct: 2,
          explanation: "Helium has a completely filled 1s² electronic configuration and the smallest atomic radius with no inner screening electrons, giving it the highest first ionization enthalpy."
        },
        {
          id: 8,
          question: "Pointing to a photograph, a girl said: 'He is the son of the only daughter of my maternal grandfather'. How is the boy related to the girl?",
          options: ["Brother", "Cousin", "Uncle", "Nephew"],
          correct: 0,
          explanation: "Only daughter of maternal grandfather is the girl's mother. Son of her mother is her brother."
        }
      ]
    },
    {
      id: "junior-math-olympiad",
      title: "Junior Mathematics Olympiad (JMO) Diagnostic",
      classes: "Class 5-6",
      category: "Junior Math",
      durationMinutes: 10,
      totalQuestions: 6,
      marksPerQuestion: 4,
      negativeMarks: 0,
      difficulty: "Easy to Medium",
      description: "Fun & engaging Olympiad test on fractions, speed math, shapes, and sequence logic for Class 5 & 6.",
      questions: [
        {
          id: 1,
          question: "What is the sum: 3/4 + 5/6 - 1/3?",
          options: ["5/4", "7/6", "3/2", "1"],
          correct: 0,
          explanation: "LCM of 4, 6, 3 is 12. (9 + 10 - 4)/12 = 15/12 = 5/4."
        },
        {
          id: 2,
          question: "The perimeter of a square is 36 cm. What is its area in sq cm?",
          options: ["64", "81", "72", "144"],
          correct: 1,
          explanation: "Side = 36 / 4 = 9 cm. Area = 9 × 9 = 81 sq cm."
        },
        {
          id: 3,
          question: "A shopkeeper sells 15 pens for ₹300. How much do 24 pens cost at the same rate?",
          options: ["₹450", "₹480", "₹500", "₹520"],
          correct: 1,
          explanation: "Cost of 1 pen = 300 / 15 = ₹20. Cost of 24 pens = 24 × 20 = ₹480."
        },
        {
          id: 4,
          question: "How many two-digit prime numbers end with the digit 7?",
          options: ["4", "5", "6", "7"],
          correct: 1,
          explanation: "Two-digit primes ending in 7: 17, 37, 47, 67, 97. Total = 5 primes."
        },
        {
          id: 5,
          question: "If 25% of a number is 60, what is 40% of the same number?",
          options: ["80", "96", "100", "120"],
          correct: 1,
          explanation: "Number = 60 / 0.25 = 240. 40% of 240 = 0.40 × 240 = 96."
        },
        {
          id: 6,
          question: "Look at the sequence: 4, 9, 16, 25, 36, ? What is the next term?",
          options: ["45", "49", "54", "64"],
          correct: 1,
          explanation: "Squares of consecutive integers: 2², 3², 4², 5², 6², 7² = 49."
        }
      ]
    },
    {
      id: "logical-reasoning-speed",
      title: "Mental Ability & Logical Speed Sprint",
      classes: "Class 6-12",
      category: "Logical Reasoning",
      durationMinutes: 8,
      totalQuestions: 5,
      marksPerQuestion: 4,
      negativeMarks: 1,
      difficulty: "Medium",
      description: "Rapid-fire logical reasoning test with directional analysis, coding-decoding, and pattern matrices.",
      questions: [
        {
          id: 1,
          question: "Rohan walks 10 km North, turns right and walks 5 km, then turns right again and walks 10 km. How far and in which direction is he from his starting point?",
          options: ["5 km East", "5 km West", "10 km East", "15 km North"],
          correct: 0,
          explanation: "10 km North, 5 km East, then 10 km South places him 5 km East of starting point."
        },
        {
          id: 2,
          question: "If + means multiplication, - means division, × means subtraction, and ÷ means addition, calculate: 12 + 4 - 2 × 6 ÷ 3?",
          options: ["21", "24", "18", "27"],
          correct: 0,
          explanation: "Substitute: 12 × 4 ÷ 2 - 6 + 3 = 12 × 2 - 6 + 3 = 24 - 6 + 3 = 21."
        },
        {
          id: 3,
          question: "Find the missing prime in the series: 2, 3, 5, 7, 11, 13, 17, 19, ?",
          options: ["21", "23", "25", "29"],
          correct: 1,
          explanation: "Next prime number after 19 is 23."
        },
        {
          id: 4,
          question: "Which of the following is true for: 64, 125, 216, 343, 512, 729?",
          options: ["64 is odd", "343 is divisible by 5", "512 is negative", "All are perfect cubes"],
          correct: 3,
          explanation: "4³=64, 5³=125, 6³=216, 7³=343, 8³=512, 9³=729. All are perfect cubes."
        },
        {
          id: 5,
          question: "Pointing to a photograph, Amit says: 'She is the mother of my sister's son'. Who is she to Amit?",
          options: ["Sister", "Mother", "Aunt", "Wife"],
          correct: 0,
          explanation: "Sister's son's mother is Amit's sister."
        }
      ]
    }
  ],

  studyMaterials: [
    {
      id: "mat-101",
      title: "Class 10 Quadratic Equations & Polynomials Master Sheet",
      subject: "Mathematics",
      classLevel: "Class 10",
      type: "Formula Cheatsheet",
      pages: 6,
      readTime: "12 mins",
      downloads: "14.2k",
      badge: "Popular",
      contentSummary: "Complete formulas, nature of roots (D > 0, D = 0, D < 0), graphical parabola visualizations, Vieta's formulas, and 25 handpicked previous year questions with solutions."
    },
    {
      id: "mat-102",
      title: "Class 8-9 Olympiad Geometry & Circle Theorems",
      subject: "Mathematics",
      classLevel: "Class 9",
      type: "Handwritten Notes",
      pages: 14,
      readTime: "20 mins",
      downloads: "9.8k",
      badge: "Olympiad",
      contentSummary: "Concise visual proofs for cyclic quadrilaterals, chord angle theorems, tangent secant theorem, Ptolemy's theorem, and Olympiad shortcut formulas."
    },
    {
      id: "mat-103",
      title: "Class 5-6 Speed Math & Mental Arithmetic Mastery",
      subject: "Mathematics",
      classLevel: "Class 6",
      type: "Daily Practice Paper (DPP)",
      pages: 8,
      readTime: "15 mins",
      downloads: "18.5k",
      badge: "Foundation",
      contentSummary: "Vedic math shortcuts for 2-digit multiplication, percentage-to-fraction table, divisibility tricks up to 19, and 50 timed mental math drill problems."
    },
    {
      id: "sci-201",
      title: "Class 10 Light: Reflection, Refraction & Lens Formula",
      subject: "Science",
      classLevel: "Class 10",
      type: "Revision Sheet",
      pages: 10,
      readTime: "18 mins",
      downloads: "12.1k",
      badge: "Board 2026",
      contentSummary: "Ray diagrams for concave & convex mirrors/lenses, sign convention cheat table, magnification calculations, Snell's law, and numerical problem bank."
    },
    {
      id: "sci-202",
      title: "Class 8-10 Laws of Motion & Gravitation Cheat Sheet",
      subject: "Science",
      classLevel: "Class 9",
      type: "Formula Cheatsheet",
      pages: 5,
      readTime: "10 mins",
      downloads: "11.4k",
      badge: "High Yield",
      contentSummary: "Newton's three laws, momentum conservation equations, universal law of gravitation, free fall kinematics, and orbital velocity basics."
    },
    {
      id: "reas-301",
      title: "NTSE & Talent Hunt Mental Ability Test (MAT) Master Guide",
      subject: "Reasoning",
      classLevel: "Class 8",
      type: "Question Bank",
      pages: 22,
      readTime: "35 mins",
      downloads: "16.9k",
      badge: "Must Have",
      contentSummary: "150 solved questions covering number series, coding-decoding, blood relations, non-verbal cube rotation, mirror images, and analytical syllogisms."
    },
    {
      id: "cs-401",
      title: "Summer Camp AI & Python Starter Handbook",
      subject: "AI & Coding",
      classLevel: "Class 7",
      type: "Handbook",
      pages: 12,
      readTime: "25 mins",
      downloads: "7.3k",
      badge: "Free",
      contentSummary: "Basics of Artificial Intelligence, neural network intuition without heavy math, Python variables & loops, and prompt engineering examples."
    },
    {
      id: "pyq-501",
      title: "Gyanexia Talent Hunt 2024 & 2025 Solved Papers (With Solutions)",
      subject: "PYQs",
      classLevel: "Class 8-10",
      type: "Past Exam Paper",
      pages: 28,
      readTime: "45 mins",
      downloads: "22.8k",
      badge: "Official",
      contentSummary: "Complete authentic question papers from previous Gyanexia Talent Hunt editions with step-by-step video solution notes by Laxmi Prajapati and NIT Patna mentors."
    }
  ],

  leaderboard: [
    { rank: 1, name: "Aarav Sharma", score: "98.5%", school: "Delhi Public School", city: "Kanpur", medal: "🥇 1st", badge: "Math Prodigy", streak: 42 },
    { rank: 2, name: "Priya Patel", score: "97.0%", school: "St. Xavier High School", city: "Lucknow", medal: "🥈 2nd", badge: "STEM Star", streak: 38 },
    { rank: 3, name: "Rohan Gupta", score: "96.2%", school: "Kendriya Vidyalaya IITK", city: "Kanpur", medal: "🥉 3rd", badge: "Reasoning Wizard", streak: 35 },
    { rank: 4, name: "Ananya Verma", score: "95.0%", school: "City Montessori School", city: "Lucknow", medal: "🌟 4th", badge: "Speed Master", streak: 29 },
    { rank: 5, name: "Kavya Singh", score: "94.4%", school: "Army Public School", city: "Allahabad", medal: "🌟 5th", badge: "Olympiad Ranker", streak: 27 },
    { rank: 6, name: "Aditya Srivastava", score: "93.8%", school: "Seth M.R. Jaipuria", city: "Kanpur", medal: "6th", badge: "Scholar", streak: 24 },
    { rank: 7, name: "Sneha Roy", score: "93.1%", school: "St. Mary's Convent", city: "Varanasi", medal: "7th", badge: "Scholar", streak: 21 },
    { rank: 8, name: "Vikas Maurya", score: "92.5%", school: "Navodaya Vidyalaya", city: "Unnao", medal: "8th", badge: "Scholar", streak: 19 }
  ],

  participationData: {
    labels: ["Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
    counts: [27, 26, 28, 33, 11, 24, 4, 4],
    colors: [
      "#FF385C",
      "#38BDF8",
      "#FACC15",
      "#22C55E",
      "#A855F7",
      "#FB923C",
      "#06B6D4",
      "#84CC16"
    ]
  }
};
