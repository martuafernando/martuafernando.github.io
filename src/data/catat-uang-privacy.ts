import type { PolicyDocument } from "~/domain/legal";

/**
 * Privacy policy for the catat_uang Android app
 * (package `com.martuaapp.catat_uang`).
 *
 * Every claim here is checked against the app source: the release manifest
 * declares no INTERNET permission, the database is SQLCipher-encrypted with a
 * key held in the platform keystore, and no analytics or network SDK is
 * linked. Re-verify these before editing — this page is a promise, not copy.
 */
export const catatUangPrivacy: PolicyDocument = {
	app: "catat_uang",

	eyebrow: {
		en: "catat_uang · Legal",
		id: "catat_uang · Legal",
	},

	title: {
		en: "Privacy Policy",
		id: "Kebijakan Privasi",
	},

	summary: {
		en: "catat_uang keeps your financial records on your phone and nowhere else. There is no account, no server, and no analytics — the app cannot send your data anywhere, because it ships without permission to use the network at all.",
		id: "catat_uang menyimpan catatan keuangan Anda di ponsel Anda dan tidak di tempat lain. Tidak ada akun, tidak ada server, dan tidak ada analitik — aplikasi ini tidak bisa mengirim data Anda ke mana pun, karena dirilis tanpa izin akses jaringan sama sekali.",
	},

	effectiveDate: "2026-08-25",
	effectiveDateLabel: {
		en: "25 August 2026",
		id: "25 Agustus 2026",
	},

	facts: [
		{
			label: { en: "Application", id: "Aplikasi" },
			value: { en: "catat_uang (Android)", id: "catat_uang (Android)" },
		},
		{
			label: { en: "Package", id: "Paket" },
			value: {
				en: "com.martuaapp.catat_uang",
				id: "com.martuaapp.catat_uang",
			},
		},
		{
			label: { en: "Data collected", id: "Data yang dikumpulkan" },
			value: { en: "None", id: "Tidak ada" },
		},
		{
			label: { en: "Data shared", id: "Data yang dibagikan" },
			value: { en: "None", id: "Tidak ada" },
		},
		{
			label: { en: "Developer", id: "Pengembang" },
			value: { en: "Martua Fernando", id: "Martua Fernando" },
		},
	],

	sections: [
		{
			segLabel: { en: "01 · In short", id: "01 · Ringkasnya" },
			heading: {
				en: "Nothing leaves your device.",
				id: "Tidak ada yang keluar dari perangkat Anda.",
			},
			paragraphs: {
				en: [
					"catat_uang is an offline personal finance app. Everything you record — accounts, transactions, categories, notes — is written to a database stored in the app's private storage on your own phone.",
					"I do not operate a server for this app. I do not receive your data, I cannot read it, and there is no copy of it anywhere I can reach. If you uninstall the app, that data is gone.",
				],
				id: [
					"catat_uang adalah aplikasi keuangan pribadi yang bekerja luring (offline). Semua yang Anda catat — akun, transaksi, kategori, catatan — ditulis ke sebuah basis data di penyimpanan privat aplikasi pada ponsel Anda sendiri.",
					"Saya tidak mengoperasikan server apa pun untuk aplikasi ini. Saya tidak menerima data Anda, tidak dapat membacanya, dan tidak ada salinannya di tempat mana pun yang bisa saya akses. Jika Anda menghapus aplikasi ini, data tersebut ikut hilang.",
				],
			},
		},

		{
			segLabel: { en: "02 · What is stored", id: "02 · Data yang disimpan" },
			heading: {
				en: "What the app keeps on your phone.",
				id: "Apa yang disimpan aplikasi di ponsel Anda.",
			},
			paragraphs: {
				en: [
					"The app stores only what you enter or import yourself. It never asks for your name, email, phone number, or any bank credential — there is no sign-up and no login screen.",
				],
				id: [
					"Aplikasi hanya menyimpan apa yang Anda masukkan atau impor sendiri. Aplikasi tidak pernah meminta nama, email, nomor telepon, atau kredensial perbankan apa pun — tidak ada pendaftaran maupun halaman masuk.",
				],
			},
			checks: {
				en: [
					"Accounts you create, with their names and balances.",
					"Transactions: amount, date and time, type, category, and any note you write.",
					"Categories, sub-categories, and the keyword rules used to auto-categorise imports.",
					"Recurring transaction schedules.",
					"App preferences such as language, theme, and duplicate-detection settings.",
				],
				id: [
					"Akun yang Anda buat, beserta nama dan saldonya.",
					"Transaksi: nominal, tanggal dan waktu, jenis, kategori, serta catatan yang Anda tulis.",
					"Kategori, sub-kategori, dan aturan kata kunci untuk mengategorikan hasil impor secara otomatis.",
					"Jadwal transaksi berulang.",
					"Preferensi aplikasi seperti bahasa, tema, dan pengaturan deteksi duplikat.",
				],
			},
		},

		{
			segLabel: { en: "03 · Network", id: "03 · Jaringan" },
			heading: {
				en: "The app has no internet access.",
				id: "Aplikasi tidak punya akses internet.",
			},
			paragraphs: {
				en: [
					"This is not only a promise — it is enforced by Android. The released build of catat_uang does not declare the INTERNET permission, so the operating system itself blocks the app from opening any network connection.",
					"That means there is no upload, no sync, no backup to a cloud of mine, no crash reporting, and no advertising or analytics SDK. You can verify this yourself: check the app's permission list on Google Play or in your phone's app settings.",
				],
				id: [
					"Ini bukan sekadar janji — Android yang menegakkannya. Versi rilis catat_uang tidak mendeklarasikan izin INTERNET, sehingga sistem operasi sendiri yang memblokir aplikasi dari membuka koneksi jaringan apa pun.",
					"Artinya tidak ada unggahan, tidak ada sinkronisasi, tidak ada cadangan ke cloud milik saya, tidak ada pelaporan kerusakan (crash report), dan tidak ada SDK iklan maupun analitik. Anda dapat memeriksanya sendiri: lihat daftar izin aplikasi di Google Play atau di pengaturan aplikasi pada ponsel Anda.",
				],
			},
		},

		{
			segLabel: { en: "04 · Statement import", id: "04 · Impor mutasi" },
			heading: {
				en: "PDF statements are read on the device.",
				id: "Mutasi PDF dibaca di perangkat.",
			},
			paragraphs: {
				en: [
					"catat_uang can read a bank statement PDF and turn it into transactions. You choose the file through Android's own file picker, which grants the app access to that single file and nothing else — the app never browses your storage on its own.",
					"The PDF is parsed entirely on your phone. Only the transactions extracted from it are saved into the local database. The statement is not uploaded, and it is not copied into the app's permanent storage.",
				],
				id: [
					"catat_uang dapat membaca PDF mutasi rekening dan mengubahnya menjadi transaksi. Anda memilih berkasnya melalui pemilih berkas bawaan Android, yang memberi aplikasi akses hanya ke satu berkas itu dan tidak ke yang lain — aplikasi tidak pernah menelusuri penyimpanan Anda sendiri.",
					"PDF tersebut diproses sepenuhnya di ponsel Anda. Hanya transaksi hasil ekstraksinya yang disimpan ke basis data lokal. Berkas mutasi tidak diunggah dan tidak disalin ke penyimpanan permanen aplikasi.",
				],
			},
		},

		{
			segLabel: { en: "05 · Security", id: "05 · Keamanan" },
			heading: {
				en: "Your database is encrypted at rest.",
				id: "Basis data Anda terenkripsi saat tersimpan.",
			},
			paragraphs: {
				en: [
					"The local database is encrypted with SQLCipher using a 256-bit key generated randomly on your device the first time the app runs. The key is held in the Android keystore, protected by the system's own hardware-backed encryption, and never leaves the phone.",
					"Android also isolates the app's storage from other apps. Still, no encryption protects against someone who already has your unlocked phone — please keep a screen lock enabled.",
				],
				id: [
					"Basis data lokal dienkripsi menggunakan SQLCipher dengan kunci 256-bit yang dibuat secara acak di perangkat Anda saat aplikasi pertama kali dijalankan. Kunci tersebut disimpan di keystore Android, dilindungi enkripsi berbasis perangkat keras milik sistem, dan tidak pernah keluar dari ponsel.",
					"Android juga mengisolasi penyimpanan aplikasi dari aplikasi lain. Meski begitu, tidak ada enkripsi yang melindungi dari orang yang sudah memegang ponsel Anda dalam keadaan terbuka — mohon tetap aktifkan kunci layar.",
				],
			},
		},

		{
			segLabel: { en: "06 · Third parties", id: "06 · Pihak ketiga" },
			heading: {
				en: "No third party receives anything.",
				id: "Tidak ada pihak ketiga yang menerima apa pun.",
			},
			paragraphs: {
				en: [
					"There is no advertising network, no analytics provider, no crash reporter, and no payment processor in this app. Your data is never sold, rented, or shared, because it never reaches me in the first place.",
					"If a lawful request for user data were ever made, I would have nothing to hand over.",
				],
				id: [
					"Tidak ada jaringan iklan, penyedia analitik, pelapor kerusakan, maupun pemroses pembayaran di aplikasi ini. Data Anda tidak pernah dijual, disewakan, atau dibagikan, karena data itu memang tidak pernah sampai kepada saya.",
					"Seandainya ada permintaan data pengguna yang sah secara hukum, tidak ada yang bisa saya serahkan.",
				],
			},
		},

		{
			segLabel: { en: "07 · Your control", id: "07 · Kendali Anda" },
			heading: {
				en: "Deleting your data.",
				id: "Menghapus data Anda.",
			},
			paragraphs: {
				en: [
					"Because the data lives only on your device, you control it completely and do not need to ask me for anything.",
				],
				id: [
					"Karena data hanya berada di perangkat Anda, Anda memegang kendali penuh dan tidak perlu meminta apa pun kepada saya.",
				],
			},
			checks: {
				en: [
					"Delete individual records at any time from inside the app.",
					"Use Settings → Clear All Transactions to remove every transaction at once.",
					"Clear the app's storage from Android's app settings to wipe the database entirely.",
					"Uninstalling the app removes the database and the encryption key with it.",
				],
				id: [
					"Hapus catatan satu per satu kapan saja dari dalam aplikasi.",
					"Gunakan Pengaturan → Hapus Semua Transaksi untuk menghapus seluruh transaksi sekaligus.",
					"Bersihkan penyimpanan aplikasi dari pengaturan aplikasi Android untuk menghapus basis data seluruhnya.",
					"Menghapus (uninstall) aplikasi akan menghapus basis data beserta kunci enkripsinya.",
				],
			},
		},

		{
			segLabel: { en: "08 · Children", id: "08 · Anak-anak" },
			heading: {
				en: "Children's privacy.",
				id: "Privasi anak.",
			},
			paragraphs: {
				en: [
					"catat_uang is not directed at children under 13. Since the app collects no personal information from anyone and transmits nothing, it holds no children's data either.",
				],
				id: [
					"catat_uang tidak ditujukan untuk anak di bawah 13 tahun. Karena aplikasi ini tidak mengumpulkan informasi pribadi dari siapa pun dan tidak mengirimkan apa pun, aplikasi ini juga tidak menyimpan data anak-anak.",
				],
			},
		},

		{
			segLabel: { en: "09 · Changes", id: "09 · Perubahan" },
			heading: {
				en: "Changes to this policy.",
				id: "Perubahan kebijakan ini.",
			},
			paragraphs: {
				en: [
					"If a future version of the app ever changes how data is handled — for example by adding an optional backup — this page will be updated before that version is released, and the date above will change with it.",
				],
				id: [
					"Jika versi aplikasi di masa depan mengubah cara data ditangani — misalnya dengan menambahkan pencadangan opsional — halaman ini akan diperbarui sebelum versi tersebut dirilis, dan tanggal di atas akan ikut berubah.",
				],
			},
		},
	],

	contactEmail: "martuafernando@proton.me",
};
