// Pilih opsi ke-2 (index 1)
const select1 = document.querySelectorAll('select.form-control.bobot')[1];
const options1 = select1.options;
if (options1.length > 1) { // Pastikan ada lebih dari 1 opsi
    select1.selectedIndex = 1; // Pilih opsi kedua (index 1)
    select1.dispatchEvent(new Event('change')); // Trigger perubahan
}

// Simpan otomatis
const saveButton1 = document.querySelector('button.btn.btn-primary.btn-sm');
if (saveButton1) {
    saveButton1.click(); // Klik tombol simpan
} else {
    console.error("Tombol simpan tidak ditemukan!");
}
