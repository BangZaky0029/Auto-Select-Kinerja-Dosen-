// Pilih opsi ke-5 (index 4)
const select4 = document.querySelectorAll('select.form-control.bobot')[4];
const options4 = select4.options;
if (options4.length > 4) { // Pastikan ada lebih dari 4 opsi
    select4.selectedIndex = 4; // Pilih opsi kelima (index 4)
    select4.dispatchEvent(new Event('change')); // Trigger perubahan
}

// Simpan otomatis
const saveButton4 = document.querySelector('button.btn.btn-primary.btn-sm');
if (saveButton4) {
    saveButton4.click(); // Klik tombol simpan
} else {
    console.error("Tombol simpan tidak ditemukan!");
}
