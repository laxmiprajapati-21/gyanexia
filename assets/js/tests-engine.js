// Gyanexia Exam Engine & Timed Test Simulator
class GyanExamEngine {
  constructor() {
    this.currentTest = null;
    this.currentQuestionIdx = 0;
    this.userAnswers = {}; // { questionId: selectedOptionIndex }
    this.questionStatus = {}; // { questionId: 'unvisited' | 'unanswered' | 'answered' | 'review' }
    this.timerInterval = null;
    this.remainingSeconds = 0;
    this.totalSeconds = 0;
    this.isSubmitted = false;
  }

  startTest(testId) {
    const test = GyanData.mockTests.find(t => t.id === testId);
    if (!test) return;

    this.currentTest = test;
    this.currentQuestionIdx = 0;
    this.userAnswers = {};
    this.questionStatus = {};
    this.isSubmitted = false;
    this.remainingSeconds = test.durationMinutes * 60;
    this.totalSeconds = this.remainingSeconds;

    // Initialize statuses
    test.questions.forEach((q, idx) => {
      this.questionStatus[q.id] = idx === 0 ? 'unanswered' : 'unvisited';
    });

    this.renderTestUI();
    this.startTimer();
    
    // Scroll to test container
    document.getElementById('mock-tests')?.scrollIntoView({ behavior: 'smooth' });
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;
      this.updateTimerDisplay();

      if (this.remainingSeconds <= 0) {
        clearInterval(this.timerInterval);
        this.submitTest(true);
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const el = document.getElementById('test-timer-display');
    if (!el) return;

    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    
    el.innerHTML = `<i class="fa-regular fa-clock mr-1.5"></i> Time Left: <span class="font-mono font-bold ${this.remainingSeconds < 120 ? 'text-red-500 animate-pulse' : 'text-blue-600 dark:text-blue-400'}">${formatted}</span>`;
  }

  goToQuestion(index) {
    if (!this.currentTest || index < 0 || index >= this.currentTest.questions.length) return;
    
    const currQ = this.currentTest.questions[this.currentQuestionIdx];
    if (this.questionStatus[currQ.id] === 'unvisited') {
      this.questionStatus[currQ.id] = 'unanswered';
    }

    this.currentQuestionIdx = index;
    const nextQ = this.currentTest.questions[index];
    if (this.questionStatus[nextQ.id] === 'unvisited') {
      this.questionStatus[nextQ.id] = 'unanswered';
    }

    this.renderQuestion();
    this.renderPalette();
  }

  selectOption(optionIdx) {
    if (this.isSubmitted || !this.currentTest) return;
    const q = this.currentTest.questions[this.currentQuestionIdx];
    this.userAnswers[q.id] = optionIdx;
    this.questionStatus[q.id] = 'answered';
    this.renderQuestion();
    this.renderPalette();
  }

  clearOption() {
    if (this.isSubmitted || !this.currentTest) return;
    const q = this.currentTest.questions[this.currentQuestionIdx];
    delete this.userAnswers[q.id];
    this.questionStatus[q.id] = 'unanswered';
    this.renderQuestion();
    this.renderPalette();
  }

  markForReview() {
    if (this.isSubmitted || !this.currentTest) return;
    const q = this.currentTest.questions[this.currentQuestionIdx];
    this.questionStatus[q.id] = 'review';
    this.renderPalette();
    if (this.currentQuestionIdx < this.currentTest.questions.length - 1) {
      this.goToQuestion(this.currentQuestionIdx + 1);
    }
  }

  nextQuestion() {
    if (this.currentQuestionIdx < this.currentTest.questions.length - 1) {
      this.goToQuestion(this.currentQuestionIdx + 1);
    }
  }

  prevQuestion() {
    if (this.currentQuestionIdx > 0) {
      this.goToQuestion(this.currentQuestionIdx - 1);
    }
  }

  renderTestUI() {
    const container = document.getElementById('test-runner-container');
    if (!container) return;

    container.classList.remove('hidden');
    document.getElementById('test-selector-container')?.classList.add('hidden');
    document.getElementById('test-result-container')?.classList.add('hidden');

    document.getElementById('test-header-title').textContent = this.currentTest.title;
    document.getElementById('test-header-badge').textContent = this.currentTest.classes;

    this.renderQuestion();
    this.renderPalette();
  }

  renderQuestion() {
    const q = this.currentTest.questions[this.currentQuestionIdx];
    const qContainer = document.getElementById('test-question-body');
    if (!qContainer) return;

    const selectedOpt = this.userAnswers[q.id];

    let optionsHtml = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
      const isSelected = selectedOpt === idx;
      optionsHtml += `
        <button onclick="examEngine.selectOption(${idx})" class="w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${isSelected ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-medium' : 'border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800'}">
          <span class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">${letters[idx]}</span>
          <span class="flex-1 text-slate-800 dark:text-slate-100 text-base">${opt}</span>
          ${isSelected ? '<i class="fa-solid fa-circle-check text-blue-600 text-lg"></i>' : ''}
        </button>
      `;
    });

    qContainer.innerHTML = `
      <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
        <span class="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Question ${this.currentQuestionIdx + 1} of ${this.currentTest.questions.length}</span>
        <div class="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <span>+${this.currentTest.marksPerQuestion} Marks</span>
          <span class="text-slate-300 dark:text-slate-600">|</span>
          <span class="text-rose-500">-${this.currentTest.negativeMarks} Negative</span>
        </div>
      </div>
      <h3 class="text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-6 leading-relaxed">${q.question}</h3>
      <div class="space-y-3">
        ${optionsHtml}
      </div>
    `;
  }

  renderPalette() {
    const paletteContainer = document.getElementById('test-question-palette');
    if (!paletteContainer || !this.currentTest) return;

    let html = '';
    this.currentTest.questions.forEach((q, idx) => {
      const status = this.questionStatus[q.id] || 'unvisited';
      const isCurrent = idx === this.currentQuestionIdx;

      let statusClass = 'q-unvisited';
      if (status === 'answered') statusClass = 'q-answered';
      else if (status === 'unanswered') statusClass = 'q-unanswered';
      else if (status === 'review') statusClass = 'q-review';

      if (isCurrent) statusClass += ' q-current';

      html += `
        <button onclick="examEngine.goToQuestion(${idx})" class="q-btn ${statusClass}" title="Question ${idx + 1}">
          ${idx + 1}
        </button>
      `;
    });

    paletteContainer.innerHTML = html;

    // Update Counts
    let answered = 0, unanswered = 0, review = 0, unvisited = 0;
    this.currentTest.questions.forEach(q => {
      const st = this.questionStatus[q.id];
      if (st === 'answered') answered++;
      else if (st === 'review') review++;
      else if (st === 'unanswered') unanswered++;
      else unvisited++;
    });

    if (document.getElementById('stat-answered')) document.getElementById('stat-answered').textContent = answered;
    if (document.getElementById('stat-unanswered')) document.getElementById('stat-unanswered').textContent = unanswered;
    if (document.getElementById('stat-review')) document.getElementById('stat-review').textContent = review;
    if (document.getElementById('stat-unvisited')) document.getElementById('stat-unvisited').textContent = unvisited;
  }

  confirmSubmit() {
    if (confirm('Are you sure you want to submit your test?')) {
      this.submitTest();
    }
  }

  submitTest(auto = false) {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.isSubmitted = true;

    // Compute Results
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    let totalScore = 0;

    this.currentTest.questions.forEach(q => {
      const userAns = this.userAnswers[q.id];
      if (userAns === undefined) {
        unattemptedCount++;
      } else if (userAns === q.correct) {
        correctCount++;
        totalScore += this.currentTest.marksPerQuestion;
      } else {
        incorrectCount++;
        totalScore -= this.currentTest.negativeMarks;
      }
    });

    const maxMarks = this.currentTest.questions.length * this.currentTest.marksPerQuestion;
    const finalScore = Math.max(0, totalScore);
    const accuracy = (correctCount + incorrectCount) > 0 ? Math.round((correctCount / (correctCount + incorrectCount)) * 100) : 0;
    const timeSpentSecs = this.totalSeconds - this.remainingSeconds;
    const timeMins = Math.floor(timeSpentSecs / 60);
    const timeSecs = timeSpentSecs % 60;

    // Show Results View
    document.getElementById('test-runner-container')?.classList.add('hidden');
    const resContainer = document.getElementById('test-result-container');
    if (!resContainer) return;
    resContainer.classList.remove('hidden');

    document.getElementById('res-test-title').textContent = this.currentTest.title;
    document.getElementById('res-score-value').textContent = `${finalScore} / ${maxMarks}`;
    document.getElementById('res-accuracy-value').textContent = `${accuracy}%`;
    document.getElementById('res-correct-count').textContent = correctCount;
    document.getElementById('res-wrong-count').textContent = incorrectCount;
    document.getElementById('res-unattempted-count').textContent = unattemptedCount;
    document.getElementById('res-time-taken').textContent = `${timeMins}m ${timeSecs}s`;

    // Confetti celebration
    if (typeof confetti === 'function') {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }

    // Render Solutions Review
    this.renderSolutionsReview();
  }

  renderSolutionsReview() {
    const container = document.getElementById('solutions-review-container');
    if (!container || !this.currentTest) return;

    let html = '';
    const letters = ['A', 'B', 'C', 'D'];

    this.currentTest.questions.forEach((q, idx) => {
      const userAns = this.userAnswers[q.id];
      const isCorrect = userAns === q.correct;
      const isUnattempted = userAns === undefined;

      let badgeHtml = '';
      if (isCorrect) {
        badgeHtml = '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"><i class="fa-solid fa-check mr-1"></i> Correct (+4)</span>';
      } else if (isUnattempted) {
        badgeHtml = '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"><i class="fa-regular fa-circle-pause mr-1"></i> Skipped (0)</span>';
      } else {
        badgeHtml = '<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300"><i class="fa-solid fa-xmark mr-1"></i> Incorrect (-1)</span>';
      }

      let optionsList = '';
      q.options.forEach((opt, oIdx) => {
        let optStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300';
        if (oIdx === q.correct) {
          optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold';
        } else if (oIdx === userAns && !isCorrect) {
          optStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 line-through';
        }

        optionsList += `
          <div class="p-3 rounded-lg border text-sm flex items-center gap-2 ${optStyle}">
            <span class="font-bold w-6 text-center">${letters[oIdx]}.</span>
            <span>${opt}</span>
            ${oIdx === q.correct ? '<span class="ml-auto text-xs font-bold text-emerald-600 dark:text-emerald-400"><i class="fa-solid fa-circle-check"></i> Correct Answer</span>' : ''}
            ${oIdx === userAns && !isCorrect ? '<span class="ml-auto text-xs font-bold text-rose-600 dark:text-rose-400"><i class="fa-solid fa-circle-xmark"></i> Your Choice</span>' : ''}
          </div>
        `;
      });

      html += `
        <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 mb-4">
          <div class="flex items-center justify-between mb-3">
            <span class="font-bold text-sm text-slate-900 dark:text-white">Question ${idx + 1}</span>
            ${badgeHtml}
          </div>
          <p class="text-slate-800 dark:text-slate-100 font-medium mb-4 text-base">${q.question}</p>
          <div class="space-y-2 mb-4">
            ${optionsList}
          </div>
          <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 text-xs md:text-sm text-slate-700 dark:text-slate-300">
            <strong class="text-blue-700 dark:text-blue-300 block mb-1"><i class="fa-solid fa-lightbulb mr-1"></i> Step-by-Step Explanation:</strong>
            ${q.explanation}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  exitTest() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    document.getElementById('test-runner-container')?.classList.add('hidden');
    document.getElementById('test-result-container')?.classList.add('hidden');
    document.getElementById('test-selector-container')?.classList.remove('hidden');
  }
}

const examEngine = new GyanExamEngine();
