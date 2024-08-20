/* Genel Stil Ayarları */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s, color 0.3s;
}

/* Header Stilleri */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #333;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.logo {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.logo i {
    margin-right: 10px;
}

.theme-switcher {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    border: none;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    transition: background-color 0.3s;
}

.theme-switcher i {
    color: #f1c40f;
}

/* İkon Stilleri */
body.dark-mode .theme-switcher i {
    color: #f1c40f;
}

/* Menü Stilleri */
.menu {
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    overflow-x: auto;
    white-space: nowrap;
}

.menu-items {
    display: flex;
    gap: 20px;
}

.menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 12px;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.3s;
    cursor: pointer;
    width: auto;
    min-width: 180px;
    height: 60px;
}

/* Kaydırma çubuğunu gizleme */
.menu::-webkit-scrollbar {
    display: none;
}

.menu {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.menu-item:hover, .menu-item.active {
    background-color: #007bff;
    color: #fff;
}

.menu-item .icon {
    font-size: 24px;
    margin-right: 10px;
}

.menu-item .text {
    font-size: 16px;
}

/* İçerik Bölümleri */
.content {
    display: none;
    padding: 20px;
    border-radius: 8px;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content.active {
    display: block;
}

.test {
    margin-top: 20px;
}

.test-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
}

.test-header h2 {
    font-size: 18px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.text-size-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #007bff;
    transition: color 0.3s;
}

.text-size-btn:hover {
    color: #0056b3;
}

.test-question {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
}

.test-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
}

.test-options label {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    background-color: #f0f0f0;
    transition: background-color 0.3s;
}

.test-options label:hover {
    background-color: #e0e0e0;
}

.test-options input {
    margin-right: 10px;
    accent-color: #007bff;
}

/* Kontrol Et Butonu */
.check-answer-btn {
    display: inline-block;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    text-align: center;
}

.check-answer-btn:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
}

/* Karanlık Mod için Ek Stil Ayarları */
body.dark-mode {
    background-color: #333;
    color: #fff;
}

body.dark-mode header {
    background-color: #222;
}

body.dark-mode .menu-item {
    background-color: #444;
    color: #fff;
}

body.dark-mode .menu-item:hover, body.dark-mode .menu-item.active {
    background-color: #007bff;
    color: #fff;
}

body.dark-mode .content {
    background-color: #444;
    color: #fff;
}

body.dark-mode .test-options label {
    background-color: #555;
    color: #fff;
}

body.dark-mode .test-options label:hover {
    background-color: #666;
}

body.dark-mode .correct {
    background-color: #004d00;
    color: #fff;
}

body.dark-mode .incorrect {
    background-color: #6c0000;
    color: #fff;
}

body.dark-mode .check-answer-btn {
    background-color: #0056b3;
    color: #fff;
}

/* Doğru ve Yanlış Şıkların Buton Renkleri */
.correct.selected {
    background-color: #28a745;
    color: #fff;
}

.incorrect.selected {
    background-color: #dc3545;
    color: #fff;
}

body.dark-mode .correct.selected {
    background-color: #004d00;
    color: #fff;
}

body.dark-mode .incorrect.selected {
    background-color: #6c0000;
    color: #fff;
}

/* Görsel Alanı */
.image-container {
    text-align: center;
    margin-top: 20px;
}

.image-container img {
    max-width: 100%; /* Resmin genişliği, kapsayıcı alanı aşmayacak şekilde ayarlanır */
    height: auto; /* Yükseklik, genişliğe orantılı olarak ayarlanır */
    border-radius: 8px; /* Köşeleri yuvarlatır */
    object-fit: cover; /* Resmin kapsayıcıya uygun şekilde kesilmesini sağlar */
}

/* İçerik Başlıkları */
.content-header {
    text-align: center;
    margin: 20px 0;
}

.content-header h3 {
    font-size: 20px;
    font-weight: bold;
}

/* İçerik Metinleri */
.section-content {
    font-size: 16px;
    margin-bottom: 20px;
}

/* Footer ve Sosyal Medya İkonları Stilleri */
footer.social-media-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: #fff;
}

footer.social-media-icons .social-icon {
    font-size: 28px;
    color: #fff;
    margin: 0 15px;
    transition: color 0.3s;
}

footer.social-media-icons .social-icon:hover {
    color: #007bff;
}

/* Mobil Uyumlu Görsel Alanı */
@media (max-width: 600px) {
    .test-header h2, .logo {
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .content-header h3 {
        font-size: 16px;
    }

    .section-content {
        font-size: 14px;
    }

    .image-container img {
        /* Mobil uyum için resmin kapsayıcıya tamamen uymasını sağlar */
        width: 100%;
        height: auto;
    }

    .logo {
        font-size: 18px;
    }
}
