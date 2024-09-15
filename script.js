document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const details = item.querySelector('.details');
            const isVisible = details.style.display === 'block';
            
            // Hide all details
            document.querySelectorAll('.details').forEach(detail => {
                detail.style.display = 'none';
            });

            // Toggle current details
            details.style.display = isVisible ? 'none' : 'block';
        });
    });
});
