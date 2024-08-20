// Tema değiştirme fonksiyonu
document.getElementById('theme-switcher').addEventListener('click', function() {
    const body = document.body;
    const icon = this.querySelector('i');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// Bölüm değiştirme fonksiyonu
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');

    // Son ziyaret edilen sayfayı kaydet
    localStorage.setItem('lastVisitedSection', sectionId);
}

// Sayfa yüklendiğinde son ziyaret edilen sayfayı göster
document.addEventListener('DOMContentLoaded', function() {
    const lastVisitedSection = localStorage.getItem('lastVisitedSection');
    if (lastVisitedSection) {
        showSection(lastVisitedSection);
    } else {
        // Varsayılan olarak ana sayfayı göster
        showSection('home'); // 'home' ID'si ile 'yazarlar' sayfasını gösterir
    }
});

// Test cevabını kontrol etme fonksiyonu
const answerKeys = {
    home: 'A',     // Ana sayfa testi için doğru cevap
    books: 'B',    // Kitaplar testi için doğru cevap
    charts: 'A',   // Grafik testi için doğru cevap
    calendar: 'A', // Takvim testi için doğru cevap
    settings: 'A', // Ayarlar testi için doğru cevap
    about: 'A',    // Hakkında testi için doğru cevap
    culture: 'B'   // Kültür testi için doğru cevap
};

document.querySelectorAll('.test-options input').forEach(input => {
    input.addEventListener('change', function() {
        const testSectionId = this.name.split('-')[0];
        const correctAnswer = answerKeys[testSectionId];
        const selectedOption = document.querySelector(`#${testSectionId} input[name="${this.name}"]:checked`);

        document.querySelectorAll(`#${testSectionId} .test-options label`).forEach(label => {
            label.classList.remove('correct', 'incorrect', 'selected');
        });

        if (selectedOption) {
            const answerValue = selectedOption.value;
            if (answerValue === correctAnswer) {
                selectedOption.parentElement.classList.add('correct', 'selected');
            } else {
                selectedOption.parentElement.classList.add('incorrect', 'selected');
            }
        }
    });
});

// Testi kontrol etme butonu
document.querySelectorAll('.check-answer-btn').forEach(button => {
    button.addEventListener('click', function() {
        const testSectionId = this.dataset.target;
        const correctAnswer = answerKeys[testSectionId];
        const selectedOption = document.querySelector(`#${testSectionId} input[name="${testSectionId}-answer"]:checked`);

        document.querySelectorAll(`#${testSectionId} .test-options label`).forEach(label => {
            label.classList.remove('correct', 'incorrect', 'selected');
        });

        if (selectedOption) {
            const answerValue = selectedOption.value;
            if (answerValue === correctAnswer) {
                selectedOption.parentElement.classList.add('correct', 'selected');
            } else {
                selectedOption.parentElement.classList.add('incorrect', 'selected');
            }
        }
    });
});

// Metin boyutunu ayarlama fonksiyonu
function adjustTextSize(sectionId, adjustment) {
    const sectionContent = document.querySelectorAll(`#${sectionId} .section-content p`);
    const contentHeaders = document.querySelectorAll(`#${sectionId} .content-header h3`);

    contentHeaders.forEach(header => {
        const currentSize = parseFloat(window.getComputedStyle(header).fontSize);
        header.style.fontSize = (currentSize + adjustment) + 'px';
    });

    sectionContent.forEach(content => {
        const currentSize = parseFloat(window.getComputedStyle(content).fontSize);
        content.style.fontSize = (currentSize + adjustment) + 'px';
    });
}

// Metin boyutunu küçültme ve büyütme olaylarını ekle
document.querySelectorAll('.text-size-btn').forEach(button => {
    button.addEventListener('click', function() {
        const sectionId = this.dataset.target;
        const adjustment = this.id.includes('increase') ? 2 : -2;
        adjustTextSize(sectionId, adjustment);
    });
});

// Sosyal medya ikonları için yönlendirme
document.querySelectorAll('.social-media a').forEach(icon => {
    icon.addEventListener('click', function(event) {
        event.preventDefault();
        const targetUrl = this.getAttribute('href');
        window.open(targetUrl, '_blank');
    });
});

// Yukarı çık butonunu göster/gizle ve işlevselliğini ayarla
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Sayfa 300px kaydırıldığında butonu göster
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
