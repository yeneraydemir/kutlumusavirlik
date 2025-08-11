document.addEventListener('DOMContentLoaded', () => {
    fetch('footer.html')
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.text();
        })
        .then(data => {
            const footer = document.getElementById('footer');
            if (!footer) throw new Error('Footer container bulunamadı');
            footer.innerHTML = data;
            console.log('Footer yüklendi');
        })
        .catch(err => console.error('Footer yükleme hatası:', err.message));
});