let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastclaim)
    let _timers = (43200000 - __timers)
    let timers = clockString(_timers) 
    let user = global.db.data.users[m.sender]
    if (new Date - global.db.data.users[m.sender].lastclaim > 43200000) {
        conn.reply(m.chat, `Você reivindicou e obteve *1000* 💵dinheiro e *1* 🥤 poção`, m)
        user.money += 1000
        user.poçao += 1
        user.lastclaim = new Date * 1
    } else conn.reply(m.chat, `Por favor, aguarde *${timers}* novamente para poder reivindicar novamente`, m)
}
handler.help = ['collect']
handler.tags = ['']
handler.command = /^(collect)$/i

handler.fail = null

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}