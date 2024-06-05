let currentCardIndex = 0;
const mainContent = document.getElementById('mainContent');
const cards = mainContent.querySelectorAll('.card');
const geriBtn = document.createElement('button');
const ileriBtn = document.createElement('button');

geriBtn.innerHTML = '<i class="fas fa-chevron-left"></i> Geri';
ileriBtn.innerHTML = 'İleri <i class="fas fa-chevron-right"></i>';
geriBtn.disabled = true; 

function showCard(index) {
  if (index >= 0 && index < cards.length) {
    // Önce tüm kartları gizle
    cards.forEach(card => {
      card.style.display = 'none';
    });

    // Sadece seçilen kartı göster
    cards[index].style.display = 'block';

    // Butonları güncelle
    geriBtn.disabled = index === 0;
    ileriBtn.disabled = index === cards.length - 1;

    // Butonları ekle
    const navigationDiv = cards[index].querySelector('.navigation');
    navigationDiv.innerHTML = ''; 
    navigationDiv.appendChild(geriBtn);
    navigationDiv.appendChild(ileriBtn);

    currentCardIndex = index;
    ekleKartOlayDinleyicileri();
  }
}

function ekleKartOlayDinleyicileri() {
  const cardHeaders = document.querySelectorAll('.card-header');
  const cardContents = document.querySelectorAll('.card-content');

  cardHeaders.forEach((header, index) => {
    header.addEventListener('click', () => {
      cardContents[index].classList.toggle('active');
      header.querySelector('i').classList.toggle('fa-chevron-up', cardContents[index].classList.contains('active'));
      header.querySelector('i').classList.toggle('fa-chevron-down', !cardContents[index].classList.contains('active'));
    });
  });
}


geriBtn.addEventListener('click', () => {
  showCard(currentCardIndex - 1);
});

ileriBtn.addEventListener('click', () => {
  showCard(currentCardIndex + 1);
});

showCard(currentCardIndex);

// Karanlık Mod İşlemleri (değişmedi)
const darkModeIcon = document.getElementById('dark-mode-icon');
const body = document.body;

darkModeIcon.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    darkModeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    darkModeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  darkModeIcon.classList.replace('fa-moon', 'fa-sun');
} else {
  body.classList.remove('dark-mode');
  darkModeIcon.classList.replace('fa-sun', 'fa-moon');
}
