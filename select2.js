// Pilih opsi ke-3 (index 2)
const select2 = document.querySelectorAll('select.form-control.bobot')[2];
const options2 = select2.options;
if (options2.length > 2) { // Pastikan ada lebih dari 2 opsi
    select2.selectedIndex = 2; // Pilih opsi ketiga (index 2)
    select2.dispatchEvent(new Event('change')); // Trigger perubahan
}

// Simpan otomatis
const saveButton2 = document.querySelector('button.btn.btn-primary.btn-sm');
if (saveButton2) {
    saveButton2.click(); // Klik tombol simpan
} else {
    console.error("Tombol simpan tidak ditemukan!");
}
