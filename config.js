const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6283145372436']
global.ownernomer = "6283145372436"
global.premium = ['6283145372436']
global.packname = 'Sticker By'
global.author = 'WangsaffBot'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 100
}

// Fake
global.thumb = fs.readFileSync('./media/image/wangsaff.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')

// Url
global.mygit = 'https://github.com/BadBoys404'
global.myyt = 'https://youtube.com/c/Wangsaff'
global.myytv = 'https://youtube.com/channel/UCLGl7JJdAYZoYETGv9voSXg'
global.mygc = "https://chat.whatsapp.com/Cp1OJenk6Q9D9vgLjLU558"

// Engak Ngaruh, Belum Kepasang
global.botname = 'WangsafBot'
global.akulaku = 'Bot By Wangsaff'
global.ytname = 'YT Wangsaff' //Kalo Ngk Punya Yt Ngak Usah Di Ganti


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
