document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const articles = document.querySelectorAll('.article-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            articles.forEach(article => {
                if (filterValue === 'all') {
                    article.classList.remove('d-none-filter');
                    // Add fade-in animation reset if needed, or just let CSS handle it
                } else {
                    if (article.getAttribute('data-category') === filterValue) {
                        article.classList.remove('d-none-filter');
                    } else {
                        article.classList.add('d-none-filter');
                    }
                }
            });
        });
    });
});
