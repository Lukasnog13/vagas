// DOM Elements
const featuredJobsContainer = document.getElementById('featuredJobs');
const companiesSlider = document.getElementById('companiesSlider');

// Função executada quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function() {
  // Load featured jobs
  if (featuredJobsContainer) {
    // Filter to get only featured jobs and limit to first 3
    const featuredJobs = jobsData.filter(job => job.featured).slice(0, 3);
    
    if (featuredJobs.length > 0) {
      const jobCardsHTML = featuredJobs.map(job => createJobCard(job)).join('');
      featuredJobsContainer.innerHTML = jobCardsHTML;
    } else {
      featuredJobsContainer.innerHTML = '<p class="text-center">Não há vagas em destaque no momento.</p>';
    }
  }

  // Load companies for the slider
  if (companiesSlider) {
    // Use all companies for the showcase
    const companiesHTML = companiesData.map(company => createCompanyItem(company)).join('');
    companiesSlider.innerHTML = companiesHTML;
  }
});
