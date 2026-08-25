// Gyanexia Class-wise Participation Chart matching Screenshot 4
let participationChartInstance = null;

function initGyanCharts() {
  const partCanvas = document.getElementById('participationChart');
  if (!partCanvas) return;

  if (participationChartInstance) {
    participationChartInstance.destroy();
  }

  const isDark = document.documentElement.classList.contains('dark');
  const textColor = isDark ? '#94A3B8' : '#334155';
  const gridColor = isDark ? 'rgba(51, 65, 85, 0.4)' : '#E2E8F0';

  const ctx = partCanvas.getContext('2d');
  participationChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'],
      datasets: [{
        label: 'Participation',
        data: [27.5, 26, 28, 33, 11, 24, 4, 4],
        backgroundColor: [
          '#FF5B84', // Class 5 Pink
          '#38BDF8', // Class 6 Blue
          '#FACC15', // Class 7 Yellow
          '#48BB78', // Class 8 Green
          '#A855F7', // Class 9 Purple
          '#FB923C', // Class 10 Orange
          '#06B6D4', // Class 11 Cyan
          '#84CC16'  // Class 12 Lime
        ],
        borderWidth: 0,
        barPercentage: 0.85,
        categoryPercentage: 0.9
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0F172A',
          titleColor: '#FFFFFF',
          bodyColor: '#E2E8F0',
          padding: 10,
          cornerRadius: 6,
          callbacks: {
            label: (ctx) => ` Participation: ${ctx.raw}%`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: textColor,
            font: { family: 'Plus Jakarta Sans', weight: '500', size: 12 },
            maxRotation: 45,
            minRotation: 45
          }
        },
        y: {
          beginAtZero: true,
          min: 0,
          max: 35,
          grid: { color: gridColor, drawBorder: false },
          ticks: {
            stepSize: 5,
            color: textColor,
            font: { family: 'Plus Jakarta Sans', size: 12 }
          }
        }
      }
    }
  });
}

window.addEventListener('themeChanged', () => {
  initGyanCharts();
});
