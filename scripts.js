// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.getElementById('navbar-menu');
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const currentYearElements = document.querySelectorAll('#currentYear');

// Set current year in footer
currentYearElements.forEach(element => {
  element.textContent = new Date().getFullYear();
});

// Toggle mobile menu
if (menuToggle && navbarMenu) {
  menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navbarMenu && navbarMenu.classList.contains('show') && !e.target.closest('.navbar-menu') && !e.target.closest('.menu-toggle')) {
    navbarMenu.classList.remove('show');
  }
});

// Login Modal
if (loginBtn && loginModal && closeLoginModal) {
  loginBtn.addEventListener('click', () => {
    loginModal.classList.add('show');
  });
  
  closeLoginModal.addEventListener('click', () => {
    loginModal.classList.remove('show');
  });
  
  // Close modal when clicking outside
  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.classList.remove('show');
    }
  });
}

// Prevent form submission (for demo)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Esta funcionalidade está desativada nesta demonstração!');
  });
});

// Helper Functions
function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date);
}

function getDaysRemaining(closingDate) {
  if (!closingDate) return null;
  
  const today = new Date();
  const diff = closingDate.getTime() - today.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  
  return days > 0 ? days : 0;
}

function formatSalary(min, max, currency) {
  if (!min && !max) return 'A combinar';
  
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency || 'BRL',
    maximumFractionDigits: 0
  });
  
  if (min && max) {
    return `${formatter.format(min)} - ${formatter.format(max)}`;
  } else if (min) {
    return `A partir de ${formatter.format(min)}`;
  } else if (max) {
    return `Até ${formatter.format(max)}`;
  }
  
  return 'A combinar';
}

function createJobCard(job) {
  const daysRemaining = getDaysRemaining(job.closingDate);
  
  return `
    <div class="job-card ${job.featured ? 'featured' : ''}">
      <div class="job-header">
        <div class="company-logo">
          <img src="${job.company.logo}" alt="${job.company.name}">
        </div>
        <div class="company-info">
          <h3>${job.company.name}</h3>
          <p class="company-location">${job.company.location}</p>
        </div>
      </div>
      
      <h2 class="job-title">${job.title}</h2>
      
      <div class="job-tags">
        <span class="badge badge-secondary">${job.type === 'full-time' ? 'Tempo Integral' : 
                          job.type === 'part-time' ? 'Meio Período' : 
                          job.type === 'contract' ? 'Contrato' : 
                          job.type === 'internship' ? 'Estágio' : 
                          job.type === 'remote' ? 'Remoto' : job.type}</span>
        <span class="badge badge-outline">${job.category}</span>
        ${job.featured ? '<span class="badge badge-primary">Destaque</span>' : ''}
      </div>
      
      <p class="job-description">${job.description}</p>
      
      <div class="job-details">
        <div class="job-location">
          <i class="fas fa-map-marker-alt"></i>
          <span>${job.location}</span>
        </div>
        <div class="job-salary">
          <i class="fas fa-money-bill-wave"></i>
          <span>${formatSalary(job.salary.min, job.salary.max, job.salary.currency)}</span>
        </div>
      </div>
      
      <div class="job-footer">
        ${daysRemaining !== null ? `
          <div class="job-date">
            <i class="fas fa-clock"></i>
            ${daysRemaining > 0 ? `Fecha em ${daysRemaining} ${daysRemaining === 1 ? 'dia' : 'dias'}` : 'Fechada'}
          </div>
        ` : `
          <div class="job-date">
            <i class="fas fa-calendar"></i>
            Publicada em ${formatDate(job.createdAt)}
          </div>
        `}
        
        <a href="job-details.html?id=${job.id}" class="btn btn-secondary">Ver detalhes</a>
      </div>
    </div>
  `;
}

function createCompanyItem(company) {
  return `
    <a href="company-details.html?id=${company.id}" class="company-item">
      <div class="company-logo">
        <img src="${company.logo}" alt="${company.name}">
      </div>
      <div class="company-info">
        <h3>${company.name}</h3>
        <p>${company.industry}</p>
        <span class="company-location"><i class="fas fa-map-marker-alt"></i> ${company.location}</span>
      </div>
    </a>
  `;
}