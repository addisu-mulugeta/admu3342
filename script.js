
        // Current year for footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form submission handling
        document.getElementById('admissionForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Application submitted successfully!');
            this.reset();
        });

        document.getElementById('newsletterForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thanks for subscribing!');
            this.reset();
        });

        // Basic calendar generation
        const calendar = document.querySelector('.calendar');
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        // Generate calendar headers
        days.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            calendar.appendChild(dayElement);
        });

        // Generate calendar days (example)
        for (let i = 1; i <= 31; i++) {
            const dayElement = document.createElement('div');
            dayElement.textContent = i;
            calendar.appendChild(dayElement);
        }
