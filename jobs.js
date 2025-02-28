// DOM Elements
const jobsList = document.getElementById('jobsList');
const jobSearch = document.getElementById('jobSearch');
const filterLocation = document.getElementById('filterLocation');
const filterType = document.getElementById('filterType');
const filterCategory = document.getElementById('filterCategory');

// Load all jobs
function loadJobs(jobs = jobsData) {
  if (jobsList) {
    if (jobs.length > 0) {
      const jobCardsHTML = jobs.map(job => createJobCard(job)).join('');
      jobsList.innerHTML = jobCardsHTML;
    } else {
      jobsList.innerHTML = '<p class="text-center">Nenhuma vaga encontrada com os filtros atuais.</p>';
    }
  }
}

// Filter jobs
function filterJobs() {
  // Get filter values
  const searchTerm = jobSearch ? jobSearch.value.toLowerCase() : '';
  const location = filterLocation ? filterLocation.value : '';
  const type = filterType ? filterType.value : '';
  const category = filterCategory ? filterCategory.value : '';
  
  // Apply filters
  const filteredJobs = jobsData.filter(job => {
    // Search term filter (searches in title, company name, and description)
    const matchesSearch = searchTerm === '' || 
                         job.title.toLowerCase().includes(searchTerm) || 
                         job.company.name.toLowerCase().includes(searchTerm) || 
                         job.description.toLowerCase().includes(searchTerm);
    
    // Location filter
    const matchesLocation = location === '' || job.location.includes(location);
    
    // Type filter
    const matchesType = type === '' || job.type === type;
    
    // Category filter
    const matchesCategory = category === '' || job.category === category;
    
    // Return true if all filters match
    return matchesSearch && matchesLocation && matchesType && matchesCategory;
  });
  
  // Load filtered jobs
  loadJobs(filteredJobs);
}

// Executar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  // Initial load of all jobs
  loadJobs();

  // Add event listeners for filters
  if (jobSearch) {
    jobSearch.addEventListener('input', filterJobs);
  }

  if (filterLocation) {
    filterLocation.addEventListener('change', filterJobs);
  }

  if (filterType) {
    filterType.addEventListener('change', filterJobs);
  }

  if (filterCategory) {
    filterCategory.addEventListener('change', filterJobs);
  }
});
