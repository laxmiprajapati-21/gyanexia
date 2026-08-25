// GyanAI Study Buddy - Interactive Academic Assistant
class GyanAIStudyBuddy {
  constructor() {
    this.messages = [
      {
        sender: 'ai',
        text: '👋 Hello! I am **GyanAI**, your personal academic study companion. How can I help you excel today?\n\n• Ask any math or science concept\n• Get step-by-step problem explanations\n• Ask about Gyanexia Talent Hunt 2026 syllabus\n• Request quick practice questions!'
      }
    ];

    this.knowledgeBase = [
      {
        keywords: ['talent hunt', 'registration', 'prize', 'exam date', 'scholarship'],
        response: '🎯 **Gyanexia Talent Hunt 2026 Key Highlights**:\n- **Eligibility:** Students of Class 5th to 12th\n- **Exam Month:** Coming this December 2026\n- **Prizes & Awards:** ₹5,00,000+ scholarship pool, high-performance laptops for toppers, NIT Patna mentorship, gold/silver medals & certificates.\n- **Syllabus:** Mathematics, Science & Mental Ability (MAT) suited for your class level.\n\nYou can click the **"Register for Talent Hunt"** button on the website to generate your official Admit Card!'
      },
      {
        keywords: ['quadratic', 'roots', 'discriminant', 'formula'],
        response: '📐 **Quadratic Equation Master Guide**:\n- Standard form: `ax² + bx + c = 0`\n- Quadratic Formula: `x = (-b ± √(b² - 4ac)) / (2a)`\n- Discriminant `D = b² - 4ac` determines nature of roots:\n  1. **D > 0:** Two distinct real roots\n  2. **D = 0:** Two equal real roots (`x = -b / 2a`)\n  3. **D < 0:** No real roots (complex roots)\n- Sum of roots = `-b / a`, Product of roots = `c / a`.'
      },
      {
        keywords: ['newton', 'motion', 'force', 'laws of motion'],
        response: '⚡ **Newton\'s 3 Laws of Motion Explained Simply**:\n1. **First Law (Inertia):** An object stays at rest or moves with constant velocity unless an external net force acts on it.\n2. **Second Law (F = ma):** The rate of change of momentum is proportional to the applied force. `Force = mass × acceleration`.\n3. **Third Law (Action-Reaction):** For every action, there is an equal and opposite reaction (`F_AB = -F_BA`).'
      },
      {
        keywords: ['percentage', 'fraction', 'shortcut', 'vedic'],
        response: '💡 **Speed Math & Percentage Shortcuts**:\n- `1/2 = 50%`, `1/3 = 33.33%`, `1/4 = 25%`, `1/5 = 20%`\n- `1/6 = 16.66%`, `1/7 = 14.28%`, `1/8 = 12.5%`, `1/9 = 11.11%`\n\n**Quick Trick for X% of Y:**\n`X% of Y = Y% of X`!\nExample: What is `16% of 50`? Calculate `50% of 16 = 8` instantly!'
      },
      {
        keywords: ['summer camp', 'ai course', 'camp'],
        response: '☀️ **Gyanexia Summer Camp \'26**:\n- 100% FREE online summer enrichment for Class 5th to 10th students.\n- Curriculum: Basic Coding & AI, Vedic Speed Maths, Public Speaking & Communication, and DIY Science Experiments.\n- Led by NIT Patna alumni and passionate educators.'
      },
      {
        keywords: ['practice', 'questions', 'quiz', 'problem'],
        response: '📝 **Quick Practice Challenge**:\n1. **Maths:** If a car covers 120 km in 2 hours and 180 km in 3 hours, what is its average speed? *(Answer: 60 km/h)*\n2. **Reasoning:** In a clock showing 3:30, what is the acute angle between the hands? *(Answer: 75°)*\n3. **Science:** Which blood cells help in clotting? *(Answer: Platelets)*\n\nHead over to the **Mock Tests Hub** to take full timed diagnostics!'
      },
      {
        keywords: ['nikhil', 'founder', 'iit kanpur', 'about'],
        response: '🎓 **About the Founder**:\n**Laxmi Prajapati** is a student at **NIT Patna** and the visionary founder of Gyanexia. Driven by the philosophy that *"Talent is everywhere, but opportunity is not"*, he started Gyanexia to provide high-quality learning, Olympiad prep, and competitive talent hunts to students everywhere.'
      }
    ];
  }

  sendMessage(userText) {
    const trimmed = userText.trim();
    if (!trimmed) return;

    this.messages.push({ sender: 'user', text: trimmed });
    this.renderMessages();

    // Generate AI response
    setTimeout(() => {
      const response = this.generateResponse(trimmed);
      this.messages.push({ sender: 'ai', text: response });
      this.renderMessages();
    }, 450);
  }

  generateResponse(input) {
    const lower = input.toLowerCase();

    for (const item of this.knowledgeBase) {
      if (item.keywords.some(kw => lower.includes(kw))) {
        return item.response;
      }
    }

    // Default intelligent response
    return `✨ Great question about **"${input}"**!\n\nHere is a quick learning takeaway: break down the problem into fundamental principles, write down known values, and apply systematic problem solving.\n\n📚 **Recommended Next Steps**:\n- Check the **Study Material Hub** for full chapter notes & formula sheets.\n- Take our free diagnostic test in the **Mock Tests** section.\n- Feel free to ask another specific topic like *Quadratic Equations*, *Newton's Laws*, or *Speed Math tricks*!`;
  }

  renderMessages() {
    const chatContainer = document.getElementById('gyan-ai-messages');
    if (!chatContainer) return;

    let html = '';
    this.messages.forEach(msg => {
      const isAI = msg.sender === 'ai';
      html += `
        <div class="flex gap-3 ${isAI ? '' : 'flex-row-reverse'} items-start">
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isAI ? 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-sm' : 'bg-rose-500 text-white'}">
            ${isAI ? '<i class="fa-solid fa-robot"></i>' : '<i class="fa-solid fa-user"></i>'}
          </div>
          <div class="max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${isAI ? 'bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-100 shadow-sm' : 'bg-blue-600 text-white rounded-tr-sm'}">
            <div class="whitespace-pre-line">${msg.text}</div>
          </div>
        </div>
      `;
    });

    chatContainer.innerHTML = html;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  sendQuickPrompt(text) {
    const input = document.getElementById('gyan-ai-input');
    if (input) {
      input.value = text;
      this.sendMessage(text);
      input.value = '';
    }
  }

  clearChat() {
    this.messages = [
      {
        sender: 'ai',
        text: '👋 Chat cleared! Ask me anything about your studies, exams, formulas, or Gyanexia programs.'
      }
    ];
    this.renderMessages();
  }
}

const gyanAI = new GyanAIStudyBuddy();
