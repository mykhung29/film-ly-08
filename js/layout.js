document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu elements
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            const mobileMenuClose = document.getElementById('mobileMenuClose');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
            
            // Mobile search elements
            const mobileSearchToggle = document.getElementById('mobileSearchToggle');
            const mobileSearchBar = document.getElementById('mobileSearchBar');
            
            // Mobile dropdown elements
            const mobileCategoriesToggle = document.getElementById('mobileCategoriesToggle');
            const mobileCategoriesDropdown = document.getElementById('mobileCategoriesDropdown');
            const mobileYearsToggle = document.getElementById('mobileYearsToggle');
            const mobileYearsDropdown = document.getElementById('mobileYearsDropdown');
            
            // Search forms
            const desktopSearchForm = document.getElementById('desktopSearchForm');
            const mobileSearchForm = document.getElementById('mobileSearchForm');
            
            // Mobile menu toggle
            function toggleMobileMenu() {
                mobileMenu.classList.toggle('active');
                mobileMenuOverlay.classList.toggle('active');
                
                // Prevent body scrolling when menu is open
                if (mobileMenu.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            }
            
            // Mobile menu event listeners
            mobileMenuToggle.addEventListener('click', toggleMobileMenu);
            mobileMenuClose.addEventListener('click', toggleMobileMenu);
            mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
            
            // Mobile search toggle
            mobileSearchToggle.addEventListener('click', function() {
                mobileSearchBar.classList.toggle('hidden');
                if (!mobileSearchBar.classList.contains('hidden')) {
                    mobileSearchBar.querySelector('input').focus();
                }
            });
            
            // Mobile dropdown toggles
            mobileCategoriesToggle.addEventListener('click', function() {
                mobileCategoriesDropdown.classList.toggle('active');
                mobileCategoriesToggle.querySelector('i').classList.toggle('fa-chevron-down');
                mobileCategoriesToggle.querySelector('i').classList.toggle('fa-chevron-up');
            });
            
            mobileYearsToggle.addEventListener('click', function() {
                mobileYearsDropdown.classList.toggle('active');
                mobileYearsToggle.querySelector('i').classList.toggle('fa-chevron-down');
                mobileYearsToggle.querySelector('i').classList.toggle('fa-chevron-up');
            });
            
            // Search form validation
            function validateSearchForm(e) {
                const searchInput = this.querySelector('input[name="q"]');
                if (!searchInput.value.trim()) {
                    e.preventDefault();
                    searchInput.focus();
                }
            }
            
            desktopSearchForm.addEventListener('submit', validateSearchForm);
            mobileSearchForm.addEventListener('submit', validateSearchForm);
            
            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth >= 768) {
                    // Close mobile menu on resize to desktop
                    mobileMenu.classList.remove('active');
                    mobileMenuOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                    
                    // Hide mobile search bar
                    mobileSearchBar.classList.add('hidden');
                }
            });
        });