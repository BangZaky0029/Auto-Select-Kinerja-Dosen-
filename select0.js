// Pilih opsi ke-1 (index 0)
const select0 = document.querySelectorAll('select.form-control.bobot')[0];
const options0 = select0.options;
if (options0.length > 0) { // Pastikan ada lebih dari 0 opsi
    select0.selectedIndex = 0; // Pilih opsi pertama (index 0)
    select0.dispatchEvent(new Event('change')); // Trigger perubahan
}

// Simpan otomatis
const saveButton0 = document.querySelector('button.btn.btn-primary.btn-sm');
if (saveButton0) {
    saveButton0.click(); // Klik tombol simpan
} else {
    console.error("Tombol simpan tidak ditemukan!");
}
