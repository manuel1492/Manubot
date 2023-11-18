const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps[Math.floor(Math.random() * ps.length)];
  let b;
  do b = ps[Math.floor(Math.random() * ps.length)];
  while (b === a);

  const imageLink = 'https://i.imgur.com/fMy3QHq.jpg'; // Reemplaza esto con la URL de la imagen que deseas mostrar

  m.reply(
    `*${toM(a)}, 𝙳𝙴𝙱𝙴𝚁𝙸𝙰𝚂 𝙲𝙰𝚂𝙰𝚁𝚃𝙴 💍 𝙲𝙾𝙽 ${toM(b)}, 𝙷𝙰𝙲𝙴𝙽 𝚄𝙽𝙰 𝙱𝚄𝙴𝙽𝙰 𝙿𝙰𝚁𝙴𝙹𝙰 💓*`,
    null,
    {
      mentions: [a, b],
      attachment: {
        media: {
          type: 'image',
          url: imageLink,
        },
      },
    }
  );
}
handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;