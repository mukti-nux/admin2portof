import products from '../../data/products.json';

// Fungsi fetchData langsung return dari file lokal
export async function fetchData() {
  console.info(`⚠ Menggunakan data lokal dari product.json`);
  return products;
}
