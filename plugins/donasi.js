let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Tri [089675921085]
│ • Telkomsel [081243218980]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^ds|donasi$/i

module.exports = handler
