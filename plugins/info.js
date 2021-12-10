let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─「 INFO BOT 」
│
│> Bot Recoded By :
│• B o t t i - B O T
│
│> Bot Dibuat Dengan :
│• JavaScript via NodeJS
│• FFmpeg
│
│> Thanks To :
│• Nurutomo
│• Anti Bot
│• Drawl Nag
│
│> Donasi :
│• TELKOMSEL [+6281243218980]
╰────
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*© H i - F E 3 D Z*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['p']
handler.command = /^(ingfo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
