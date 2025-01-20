// Auto-select dropdown values
const selects = document.querySelectorAll('select.form-control.bobot');
selects.forEach(select => {
    const options = select.options;
    if (options.length > 0) {
        select.selectedIndex = options.length - 1; // Pilih opsi terakhir
        select.dispatchEvent(new Event('change')); // Trigger perubahan
    }
});

// Simpan otomatis
const saveButton = document.querySelector('button.btn.btn-primary.btn-sm');
if (saveButton) {
    saveButton.click(); // Klik tombol simpan
} else {
    console.error("Tombol simpan tidak ditemukan!");
}
