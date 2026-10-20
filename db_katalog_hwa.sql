-- 1. Membuat Database
CREATE DATABASE IF NOT EXISTS mrs_hwa_catalog;

-- 2. Menggunakan Database tersebut
USE mrs_hwa_catalog;

-- 3. Membuat Tabel Kategori / Series
CREATE TABLE IF NOT EXISTS series (
    id INT AUTO_INCREMENT PRIMARY KEY,
    series_name VARCHAR(100) NOT NULL
);

-- 4. Membuat Tabel Produk
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    series_id INT,
    product_name VARCHAR(150) NOT NULL,
    category VARCHAR(50),
    size VARCHAR(50),
    price INT,
    notes TEXT,
    image_url VARCHAR(255),
    is_available TINYINT(1) DEFAULT 1, 
    FOREIGN KEY (series_id) REFERENCES series(id) 
    ON DELETE SET NULL 
    ON UPDATE CASCADE
);

-- 5. Memasukkan Data Series
INSERT INTO series (series_name) VALUES
('Peony Signature'),
('Spring Sonata'),
('Classic Timeless'),
('Custom Studio');

-- 6. Memasukkan Data Produk Peony Signature (Dengan revisi wilayah pengiriman)
INSERT INTO products (series_id, product_name, category, size, price, notes, image_url, is_available) VALUES
(1, 'Grand Peony Bouquet', 'Bouquet', 'XL', 420000, 'Harga tertera adalah untuk buket saja. Tersedia ukuran S - XL. Ukuran final menyesuaikan jenis kuncup/mekar bunga Peony. Bisa tambah paper bag atau ambil paket lengkap dengan harga khusus. Khusus pengiriman area Surabaya dan Sidoarjo.', 'grand-peony-majesty.jpg', 1),
(1, 'Ethereal Ivory Peony Bouquet', 'Bouquet', 'Medium', 230000, 'Harga tertera adalah untuk buket saja. Tersedia ukuran S - XL. Bisa tambah paper bag atau ambil paket lengkap dengan harga khusus. Khusus pengiriman area Surabaya dan Sidoarjo.', 'ethereal-ivory-peony.jpg', 1),
(1, 'Petite Peony Bouquet', 'Bouquet', 'Small', 170000, 'Harga tertera adalah untuk buket saja. Tersedia ukuran S - XL. Bisa tambah paper bag atau ambil paket lengkap dengan harga khusus. Khusus pengiriman area Surabaya dan Sidoarjo.', 'petite-peony-bag-set.jpg', 1),
(1, 'Blush Peony Bloom Box', 'Bloom Box', 'All Size', 280000, 'Rangkaian eksklusif lengkap dengan box bundar premium. Khusus pengiriman area Surabaya dan Sidoarjo.', 'blush-peony-bloom-box.jpg', 1);

-- Memasukkan Data Produk untuk Spring Sonata Series (series_id = 2)
INSERT INTO products (series_id, product_name, category, size, price, notes, image_url, is_available) VALUES
(2, 'Thumbelina Pastel Bouquet', 'Bouquet', 'Medium', 150000, 'Rangkaian campuran bunga segar bernuansa soft pastel dengan pita organza yang manis. Harga tertera adalah untuk buket saja. Bisa tambah paper bag atau ambil paket lengkap dengan harga khusus. Khusus pengiriman area Surabaya dan Sidoarjo.', 'thumbelina-pastel-bouquet.jpg', 1),
(2, 'Fresh Spring Meadow Box', 'Hand Sleeve Box', 'All Size', 175000, 'Rangkaian fresh mix pastel color dalam kemasan sleeve box eksklusif. Khusus pengiriman area Surabaya dan Sidoarjo.', 'fresh-spring-meadow.jpg', 1);

-- Memasukkan Data Produk Serenity Bloom ke Classic Timeless Series
INSERT INTO products (series_id, product_name, category, size, price, notes, image_url, is_available) VALUES
(3, 'Serenity Bloom', 'Paper Bag Bouquet', 'Medium', 160000, 'Rangkaian bunga klasik bernuansa hangat di dalam kraft paper bag eksklusif berpita satin Mrs. Hwa. Harga tertera adalah untuk rangkaian saja. Bisa tambah item lain atau ambil paket lengkap dengan harga khusus. Khusus pengiriman area Surabaya dan Sidoarjo.', 'classic-heritage-paper-bag.jpg', 1);

-- Memasukkan Data Produk Blush Peony Cone ke Peony Signature Series
INSERT INTO products (series_id, product_name, category, size, price, notes, image_url, is_available) VALUES
(1, 'Blush Peony Cone', 'Cone Box', 'Medium', 195000, 'Rangkaian bunga Peony segar dalam kemasan cone eksklusif. Harga tertera adalah untuk rangkaian saja. Bisa tambah item lain atau ambil paket lengkap dengan harga khusus. Khusus pengiriman area Surabaya dan Sidoarjo.', 'blush-peony-cone.jpg', 1);

-- Memasukkan Produk The Bloom Festive Box ke series Custom Studio (series_id = 5)
INSERT INTO products (series_id, product_name, category, size, price, notes, image_url, is_available) VALUES
(4, 'The Bloom Christmas Box', 'Gift Box', 'Small', 220000, 'Rangkaian bunga eksklusif berbentuk kubah padat dalam box silinder putih minimalis. Desain dapat dikustomisasi untuk berbagai perayaan spesial. Harga tertera adalah untuk ukuran small. Khusus pengiriman area Surabaya dan Sidoarjo.', 'bloom-christmas-box.jpg', 1);