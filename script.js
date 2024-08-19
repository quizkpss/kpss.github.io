// Tema değiştirme fonksiyonu
document.getElementById('theme-switcher').addEventListener('click', function() {
    const body = document.body;
    const icon = this.querySelector('i');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        // Gece modu ayarları
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        // Gündüz modu ayarları
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

    // Aktif menü öğesinin rengini değiştir
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

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
        
        // Önce tüm seçeneklerin arka plan rengini sıfırla
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
    const testSection = document.getElementById(sectionId);
    const testHeaders = testSection.querySelectorAll('.test-header h2');
    const contentHeaders = testSection.querySelectorAll('.content-header h3');
    const sectionContent = testSection.querySelectorAll('.section-content p');

    testHeaders.forEach(header => {
        const currentSize = parseFloat(window.getComputedStyle(header).fontSize);
        header.style.fontSize = (currentSize + adjustment) + 'px';
    });

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
document.querySelectorAll('.test-header .text-size-btn').forEach(button => {
    button.addEventListener('click', function() {
        const sectionId = this.dataset.target;
        const adjustment = this.id.includes('increase') ? 2 : -2;
        adjustTextSize(sectionId, adjustment);
    });
});

// Varsayılan olarak ana sayfayı göster
showSection('home');
