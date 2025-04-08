document.addEventListener('DOMContentLoaded', function() {
    // Banner Slider Functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dots .dot');
    const totalSlides = slides.length;
    
    // Initialize with one slide if none are present in HTML
    if (totalSlides === 0) {
        const bannerContainer = document.querySelector('.banner-container');
        bannerContainer.innerHTML = `
            <div class="banner-slide active">
                <img src="chair-banner.jpg" alt="Office Chairs">
                <div class="banner-content">
                    <h2>Office Chairs</h2>
                    <h3>From ₹2,999</h3>
                    <p>Green Soul, Cell Bell & more</p>
                </div>
            </div>
        `;
    }
    
    // Next and Previous Button Functionality
    document.querySelector('.banner-next').addEventListener('click', function() {
        showSlide(currentSlide + 1);
    });
    
    document.querySelector('.banner-prev').addEventListener('click', function() {
        showSlide(currentSlide - 1);
    });
    
    // Dot Navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    function showSlide(index) {
        if (index >= totalSlides) {
            index = 0;
        } else if (index < 0) {
            index = totalSlides - 1;
        }
        
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Auto Slide
    let slideInterval = setInterval(function() {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Stop auto slide on hover
    document.querySelector('.banner-container').addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    document.querySelector('.banner-container').addEventListener('mouseleave', function() {
        slideInterval = setInterval(function() {
            showSlide(currentSlide + 1);
        }, 5000);
    });
    
    // Login Dropdown Toggle
    const loginBtn = document.querySelector('.login-btn');
    const loginDropdown = document.querySelector('.login-dropdown');
    
    loginBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        loginDropdown.style.display = loginDropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    document.addEventListener('click', function(e) {
        if (!loginDropdown.contains(e.target) && e.target !== loginBtn) {
            loginDropdown.style.display = 'none';
        }
    });
    
    // Search Functionality
    const searchInput = document.querySelector('.search-container input');
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', function() {
        performSearch();
    });
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // In a real application, this would redirect to search results
            // window.location.href = `/search?query=${encodeURIComponent(searchTerm)}`;
        }
    }
    
    // Product Horizontal Scroll
    const productContainers = document.querySelectorAll('.product-container');
    
    productContainers.forEach(container => {
        container.addEventListener('wheel', function(e) {
            if (e.deltaY !== 0) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        });
    });
    
    // Side Buttons Functionality
    document.querySelector('.coupon-btn').addEventListener('click', function() {
        alert('Coupons section clicked!');
    });
    
    document.querySelector('.spend-lens-btn').addEventListener('click', function() {
        alert('Spend Lens section clicked!');
    });
    
    document.querySelector('.settings-btn').addEventListener('click', function() {
        alert('Settings section clicked!');
    });
    
    // Initialize image placeholders if actual images aren't available
    const productImages = document.querySelectorAll('.product-card img');
    productImages.forEach(img => {
        img.onerror = function() {
            this.src = 'placeholder.png';
        };
    });
    
    // Enable dropdown menus in navigation
    const dropdowns = document.querySelectorAll('.category-nav li.dropdown');
    dropdowns.forEach(dropdown => {
        const icon = dropdown.querySelector('i');
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            alert(`${dropdown.querySelector('a span').textContent} category dropdown clicked`);
        });
    });
    
    // Cart functionality
    document.querySelector('.cart-container a').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Cart clicked! In a real application, this would take you to your cart.');
    });
    
    // Become a Seller functionality
    document.querySelector('.become-seller a').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Become a Seller clicked! In a real application, this would take you to the seller registration page.');
    });
    
    console.log('Flipkart Clone JavaScript Initialized');
});
