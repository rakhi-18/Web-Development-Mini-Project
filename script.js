// Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

        // Home icon functionality
        document.getElementById('homeIcon').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/hide home icon based on scroll position
        window.addEventListener('scroll', function() {
            const homeIcon = document.getElementById('homeIcon');
            if (window.scrollY > 500) {
                homeIcon.style.display = 'flex';
            } else {
                homeIcon.style.display = 'none';
            }
        });

        // Recommendation form submission
        document.getElementById('recommendation-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const position = document.getElementById('position').value;
            const recommendation = document.getElementById('recommendation').value;
            
            // Create new recommendation card
            const newCard = document.createElement('div');
            newCard.className = 'recommendation-card';
            newCard.innerHTML = `
                <p class="recommendation-text">${recommendation}</p>
                <div class="recommendation-author">
                    <img src="https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 70)}.jpg" alt="${name}" class="author-img">
                    <div class="author-info">
                        <h4>${name}</h4>
                        <p>${position}</p>
                    </div>
                </div>
            `;
            
            // Add to recommendations container
            document.querySelector('.recommendations-container').appendChild(newCard);
            
            // Show success modal
            document.getElementById('successModal').style.display = 'flex';
            
            // Reset form
            document.getElementById('recommendation-form').reset();
        });

        // Close modal
        document.getElementById('closeModal').addEventListener('click', function() {
            document.getElementById('successModal').style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            const modal = document.getElementById('successModal');
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Navigation hover effect enhancement
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.fontWeight = '600';
                this.style.letterSpacing = '0.5px';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.fontWeight = '500';
                this.style.letterSpacing = '0';
            });
        });