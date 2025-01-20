// Pilih opsi ke-4 (index 3)
const select3 = document.querySelectorAll('select.form-control.bobot')[3];
const options3 = select3.options;
if (options3.length > 3) { // Pastikan ada lebih dari 3 opsi
    select3.selectedIndex = 3; // Pilih opsi keempat (index 3)
    select3.dispatchEvent(new Event('change')); // Trigger perubahan
}

// Simpan otomatis
const saveButton3 = document.querySelector('button.btn.btn-primary.btn-sm');
if (saveButton3) {
    saveButton3.click(); // Klik tombol simpan
} else {
    console.error("Tombol simpan tidak ditemukan!");
}
