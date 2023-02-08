var page = 1

function nextSlide() {
    if (page < 5) {
        page += 1
        for (i = 1; i < page; i++) {
            document.querySelector('#p' + i).style.transform = 'translatex(-200%)'
        }
        document.querySelector('#p' + page).style.transform = 'translatex(0%)';

    }
    }

function prevSlid() {
    if (page > 1) {
        page -= 1
        for (i = page; i <= 5; i++) {
            document.querySelector('#p' + i).style.transform = 'translatex(200%)';
        }
        document.querySelector('#p' + page).style.transform = 'translatex(0%)'
    
    }
}