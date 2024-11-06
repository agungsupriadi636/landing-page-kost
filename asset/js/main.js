// navbar function
const toggleMenu = document.getElementById('toggle-menu');

toggleMenu.addEventListener('click', () => {
    document.getElementById('nav-mobile').classList.toggle('hidden');
});

// swicth lang
// Mengambil elemen yang diperlukan
const menuButton = document.getElementById('menu-button');
const dropdown = document.getElementById('dropdown');

// Menangani klik pada tombol menu
menuButton.addEventListener('click', () => {
    dropdown.classList.toggle('hidden'); // Menampilkan atau menyembunyikan dropdown
});

// Menangani klik pada pilihan bahasa
const languageOptions = document.querySelectorAll('.language-option');
languageOptions.forEach(option => {
    option.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah reload halaman
        const lang = option.getAttribute('data-lang');
        const flag = option.getAttribute('data-flag');

        // Memperbarui teks tombol dengan pilihan bahasa
        const curentLang = document.getElementById('curent-lang');
        curentLang.innerHTML = `<img src="${flag}" alt="${lang}" class="w-5 h-5 inline-block ml-2"> <span class="font-normal text-[16px]">${lang}</span>`;

        // Menyembunyikan dropdown setelah memilih bahasa
        dropdown.classList.add('hidden');
    });
});