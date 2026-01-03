// theme.js

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // İkonları değiştir
    document.getElementById('sun-icon').style.display = isDark ? 'none' : 'block';
    document.getElementById('moon-icon').style.display = isDark ? 'block' : 'none';

    // Yazıyı değiştir: Açık modda "AÇIK", koyu modda "KOYU"
    document.getElementById('theme-text').textContent = isDark ? 'KOYU' : 'AÇIK';
}

// Sayfa ilk yüklendiğinde her zaman beyaz (açık mod) ile başla, sonra tercihi uygula
window.addEventListener('load', () => {
    // 1. Zorla açık mod başlat (telefon sistem koyu modda bile olsa)
    document.body.classList.remove('dark-mode');

    // 2. Kullanıcının kaydettiği tercihi uygula (eğer daha önce koyu seçmişse)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // 3. İkon ve yazıyı doğru duruma getir
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('sun-icon').style.display = isDark ? 'none' : 'block';
    document.getElementById('moon-icon').style.display = isDark ? 'block' : 'none';
    document.getElementById('theme-text').textContent = isDark ? 'KOYU' : 'AÇIK';
});

