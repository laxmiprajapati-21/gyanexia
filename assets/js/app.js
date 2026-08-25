// Gyanexia App Logic - Exact Parity & Interactive Features
class GyanexiaApp {
  constructor() {
    this.currentTheme = localStorage.getItem('gyan_theme') || 'light';
    this.currentCarouselSlide = 0;
    this.carouselInterval = null;
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.initCarousel();
    this.renderStudyHubMaterials();
    this.renderLeaderboard();
    this.setupEventListeners();

    // Initialize Chart.js exactly for Screenshot 4
    setTimeout(() => {
      initGyanCharts();
    }, 200);
  }

  applyTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('gyan_theme', theme);
    const htmlEl = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');

    if (theme === 'dark') {
      htmlEl.classList.add('dark');
      if (themeIcon) themeIcon.className = 'fa-solid fa-sun text-amber-400';
    } else {
      htmlEl.classList.remove('dark');
      if (themeIcon) themeIcon.className = 'fa-solid fa-moon text-slate-500';
    }

    window.dispatchEvent(new Event('themeChanged'));
  }

  toggleTheme() {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  }

  initCarousel() {
    const slides = [
      { url: 'assets/images/classroom_exam.png', caption: 'Classroom Examination' },
      { url: 'assets/images/summer_camp.png', caption: 'Gyanexia Summer Camp' },
      { url: 'assets/images/founder_nikhil.png', caption: 'Laxmi Prajapati Mentoring' }
    ];

    this.slides = slides;
    this.showCarouselSlide(0);

    this.carouselInterval = setInterval(() => {
      this.nextCarouselSlide();
    }, 5000);
  }

  showCarouselSlide(index) {
    if (!this.slides) return;
    this.currentCarouselSlide = (index + this.slides.length) % this.slides.length;
    const slide = this.slides[this.currentCarouselSlide];

    const imgEl = document.getElementById('carousel-image');
    if (imgEl) {
      imgEl.style.opacity = '0';
      setTimeout(() => {
        imgEl.src = slide.url;
        imgEl.style.opacity = '1';
      }, 150);
    }
  }

  nextCarouselSlide() {
    this.showCarouselSlide(this.currentCarouselSlide + 1);
  }

  prevCarouselSlide() {
    this.showCarouselSlide(this.currentCarouselSlide - 1);
  }

  // Modals & Navigation
  openStudyHubModal() {
    document.getElementById('study-hub-modal')?.classList.remove('hidden');
  }

  closeStudyHubModal() {
    document.getElementById('study-hub-modal')?.classList.add('hidden');
  }

  openMockTestModal(testId) {
    document.getElementById('mock-test-modal')?.classList.remove('hidden');
    examEngine.startTest(testId);
  }

  closeMockTestModal() {
    examEngine.exitTest();
    document.getElementById('mock-test-modal')?.classList.add('hidden');
  }

  openTalentHuntModal() {
    document.getElementById('talent-hunt-modal')?.classList.remove('hidden');
    document.getElementById('reg-form-view')?.classList.remove('hidden');
    document.getElementById('reg-admit-view')?.classList.add('hidden');
  }

  closeTalentHuntModal() {
    document.getElementById('talent-hunt-modal')?.classList.add('hidden');
  }

  openLeaderboardModal() {
    document.getElementById('leaderboard-modal')?.classList.remove('hidden');
  }

  closeLeaderboardModal() {
    document.getElementById('leaderboard-modal')?.classList.add('hidden');
  }

  openSponsorsModal() {
    document.getElementById('sponsors-modal')?.classList.remove('hidden');
  }

  closeSponsorsModal() {
    document.getElementById('sponsors-modal')?.classList.add('hidden');
  }

  openContactModal() {
    document.getElementById('contact-modal')?.classList.remove('hidden');
  }

  closeContactModal() {
    document.getElementById('contact-modal')?.classList.add('hidden');
  }

  openSupportModal() {
    document.getElementById('support-modal')?.classList.remove('hidden');
  }

  closeSupportModal() {
    document.getElementById('support-modal')?.classList.add('hidden');
  }

  openGyanAIModal() {
    document.getElementById('gyan-ai-modal')?.classList.remove('hidden');
  }

  closeGyanAIModal() {
    document.getElementById('gyan-ai-modal')?.classList.add('hidden');
  }

  openCourseModal(courseId) {
    const prog = GyanData.programs.find(p => p.id === courseId);
    if (prog) {
      alert(`📚 ${prog.title}\n\n${prog.description}\n\nDuration: ${prog.duration}\nLevel: ${prog.level}\n\nCourse modules will begin soon for registered students!`);
    }
  }

  handleRegistrationSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('reg-name').value;
    const studentClass = document.getElementById('reg-class').value;
    const rollNo = 'GYAN26-' + Math.floor(100000 + Math.random() * 900000);

    document.getElementById('admit-roll').textContent = rollNo;
    document.getElementById('admit-name').textContent = name;
    document.getElementById('admit-class').textContent = studentClass;

    document.getElementById('reg-form-view')?.classList.add('hidden');
    document.getElementById('reg-admit-view')?.classList.remove('hidden');

    if (typeof confetti === 'function') {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  }

  renderStudyHubMaterials() {
    const container = document.getElementById('hub-study-materials-grid');
    if (!container) return;

    let html = '';
    GyanData.studyMaterials.slice(0, 4).forEach(mat => {
      html += `
        <div class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded">${mat.subject}</span>
              <span class="text-[10px] text-slate-400 font-semibold">${mat.classLevel}</span>
            </div>
            <h5 class="font-bold text-xs text-slate-900 dark:text-white mt-1">${mat.title}</h5>
          </div>
          <button onclick="alert('📥 Download started for: ${mat.title}');" class="mt-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-rose-500 hover:text-white text-xs font-bold transition">
            Download PDF (${mat.pages} Pages)
          </button>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  renderLeaderboard() {
    const tbody = document.getElementById('leaderboard-tbody');
    if (!tbody) return;

    let html = '';
    GyanData.leaderboard.forEach(student => {
      html += `
        <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
          <td class="py-2.5 px-2 font-bold">${student.medal.split(' ')[0]} ${student.rank}</td>
          <td class="py-2.5 px-2"><strong>${student.name}</strong> <span class="text-[10px] text-slate-400 block">${student.school}</span></td>
          <td class="py-2.5 px-2 text-center font-bold text-emerald-600">${student.score}</td>
          <td class="py-2.5 px-2 text-right"><span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700">${student.badge}</span></td>
        </tr>
      `;
    });

    tbody.innerHTML = html;
  }

  setupEventListeners() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu-dropdown');
    menuBtn?.addEventListener('click', () => {
      mobileMenu?.classList.toggle('hidden');
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeStudyHubModal();
        this.closeMockTestModal();
        this.closeTalentHuntModal();
        this.closeLeaderboardModal();
        this.closeSponsorsModal();
        this.closeContactModal();
        this.closeSupportModal();
        this.closeGyanAIModal();
      }
    });
  }
}

const app = new GyanexiaApp();
window.addEventListener('DOMContentLoaded', () => app.init());
