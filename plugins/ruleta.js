const toM = (a) => '@' + a.split('@')[0];

function handler(m, {groupMetadata}) {

  const participants = groupMetadata.participants.map(p => p.id);

  const randomParticipant = participants[Math.floor(Math.random() * participants.length)];

  const question = m.text.split('.ruleta ')[1];

  m.reply(`${question} ${toM(randomParticipant)}`, null, {
    mentions: [randomParticipant]
  });

}

handler.command = ['ruleta'];
handler.group = true; 

export default handler;