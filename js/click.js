// Lấy tất cả các phần tử có class 'movie-card' và 'theater-movie'
const movieCards = document.querySelectorAll('.movie-card, .click-item');

// Duyệt qua tất cả các phần tử và gán sự kiện click cho từng thẻ
movieCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Lấy ID hoặc slug của bộ phim từ card (giả sử có attribute data-id hoặc data-slug)
        const movieId = card.getAttribute('data-id'); // Hoặc bạn có thể thay data-id bằng một thuộc tính khác
        const movieSlug = card.getAttribute('data-slug'); // Nếu có slug của bộ phim
        
        // Chuyển hướng tới trang detail.html với tham số ID hoặc slug
        window.location.href = `detail.html?id=${encodeURIComponent(movieId)}&slug=${encodeURIComponent(movieSlug)}`;
    });
});


// Lấy tất cả các phần tử có class 'movie-card' và 'theater-movie'
const wactch = document.querySelectorAll('.click-watch');

// Duyệt qua tất cả các phần tử và gán sự kiện click cho từng thẻ
wactch.forEach((movie) => {
    movie.addEventListener('click', () => {
        // Lấy ID hoặc slug của bộ phim từ card (giả sử có attribute data-id hoặc data-slug)
        const wactchId = movie.getAttribute('data-id'); // Hoặc bạn có thể thay data-id bằng một thuộc tính khác
        const wactchSlug = movie.getAttribute('data-slug'); // Nếu có slug của bộ phim
        
        // Chuyển hướng tới trang detail.html với tham số ID hoặc slug
        window.location.href = `watch.html?id=${encodeURIComponent(wactchId)}&slug=${encodeURIComponent(wactchSlug)}`;
    });
});
