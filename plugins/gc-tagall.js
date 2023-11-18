const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝐌𝐎𝐓𝐈𝐕𝐎: ${pesan}`;
  let teks = `🎃 𝐋𝐋𝐀𝐌𝐀𝐍𝐃𝐎 𝐀𝐋 𝐆𝐑𝐔𝐏𝐎 🎃\n\n ${oi}\n\n🎃 𝐌𝐄𝐍𝐂𝐈𝐎𝐍𝐄𝐒 🎃 \n`;
  for (const mem of participants) {
    teks += ` 👻 @${mem.id.split('@')[0]}\n`;
  }

  
  teks += ` 
  
  𝐌𝐀𝐍𝐔𝐁𝐎𝐓\n\n`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
