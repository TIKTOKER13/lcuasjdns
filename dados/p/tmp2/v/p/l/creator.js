const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' //
                    + 'VERSION:3.0\n' 
                    + 'N:;Dark;;;'
                    + 'FN:Dark\n' // 
                    + 'ORG:Dark;\n' //
                    + 'TEL;type=CELL;type=VOICE;waid=5517991134416:+55 17 99113-4416\n' // 
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Dark', contacts: [{ vcard }] } }, { quoted: m })
                m.reply('Wa.me/+5517991134416')
}
handler.help = ['Dono']
handler.tags = ['info']

handler.command = /^(owner|dono)$/i

module.exports = handler
