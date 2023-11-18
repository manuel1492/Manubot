const handler = async (m, { conn, command, text }) => {
  const lovePercentage = Math.floor(Math.random() * 100);
  const isHighLove = lovePercentage >= 50;
  const loveMessages = [
    "Como dijo Khalil Gibran: 'Cuando amas, no debes decir: Dios está en mi corazón, sino más bien, estoy en el corazón de Dios'. ¡Expresa ese ardiente amor que sientes ahora mismo!",
    "Recordemos las palabras de Rumi: 'Dondequiera que estés, y sea lo que sea que hagas, sé enamorado'. Hay una chispa entre ustedes, ¡no tengan miedo de avivarla!",
    "En palabras de Paulo Coelho: 'Cuando quieres algo, todo el Universo conspira para ayudarte a lograrlo'. Podría haber algo especial aquí. ¿Por qué no darle una oportunidad?",
    "Como decía Jane Austen: 'Una mujer, para ser feliz, necesita una historia de amor'. El amor está en el aire, ¿qué tal un café para empezar su historia?",
    "Albert Einstein dijo una vez: 'La única cosa realmente valiosa es la intuición'. Si las estrellas indican potencial romántico, ¿por qué no confiar en esa intuición y dar el paso?",
    "Como diría Nicholas Sparks: 'El amor es como el viento, no puedes verlo pero puedes sentirlo'. Ustedes podrían estar al borde de escribir una historia de amor increíble.",
    "En las sabias palabras de Antoine de Saint-Exupéry: 'Amar no es mirarse el uno al otro; es mirar juntos en la misma dirección'. El tiempo y la paciencia son la clave para construir algo hermoso.",
    "Como mencionó Lao Tzu: 'Un viaje de mil millas comienza con un solo paso'. Cada paso que dan en esta dirección es valioso, sin importar la distancia que recorran.",
    "En palabras de Maya Angelou: 'En última instancia, no son los años en tu vida los que cuentan. Es la vida en tus años'. Sigan explorando, ya que las conexiones fuertes crean relaciones duraderas.",
    "Recordemos las palabras de Victor Hugo: 'La vida es una flor cuyo amor es la miel'. El amor verdadero, como la miel, requiere tiempo y esfuerzo. ¡No renuncien a saborearlo plenamente!",
    "Como dijo George Sand: 'No hay un acto de amor que no sea un acto de valor'. Atrévete a amar sin reservas y verás la belleza que puede surgir.",
    "Recordemos las palabras de Pablo Neruda: 'Puedo escribir los versos más tristes esta noche, pero también puedo escribir los versos más alegres'. Tu historia de amor está llena de versos por descubrir.",
    "En palabras de Emily Dickinson: 'La esperanza es esa cosa con plumas que se posa en el alma'. La esperanza en el amor puede llevarlos a lugares maravillosos.",
    "Como mencionó Victor Hugo: 'La vida es un buque y no una vivienda'. Aprovecha esta travesía juntos para explorar todas las maravillas que el amor puede ofrecer.",
    "Como dijo Audrey Hepburn: 'El amor es la fuerza más fuerte del mundo y, sin embargo, es la más humilde imaginable'. Deja que esa humilde fuerza los guíe en su viaje.",
    "Recordemos las palabras de John Lennon: 'El amor es la respuesta y, al mismo tiempo, la pregunta'. A veces, el amor nos desafía y nos hace buscar respuestas juntos.",
    "En palabras de Antoine de Saint-Exupéry: 'Amar es no mirarse el uno al otro, sino mirar juntos en la misma dirección'. Mantén la visión compartida de un futuro lleno de amor y felicidad.",
    "Como mencionó Hermann Hesse: 'Algunas de las cosas más hermosas del mundo no se pueden ver ni tocar, solo sentir en el corazón'. Vuestra conexión es una de esas cosas.",
    "Como dijo Paulo Coelho: 'Cuando tienes una conexión con alguien, no importa el lugar, el momento ni las circunstancias; el universo conspira para que se encuentren'. Ustedes están destinados a estar juntos.",
    "Recordemos las palabras de Nicholas Sparks: 'El amor verdadero es raro, y es la única cosa que da la vida verdadero significado'. Aprecia cada momento de esta hermosa historia de amor."
  ];
  const notSoHighLoveMessages = [
    "En ocasiones, una amistad es el preludio de un vínculo hermoso, capaz de desencadenar un amor insospechado.",
    "Recuerden, el amor no es el único protagonista; ¡su amistad también es una joya! Cultiven ese vínculo especial.",
    "Las relaciones más significativas a menudo se originan en una sólida amistad. ¡No subestimen la trascendencia de su conexión!",
    "A veces, el amor florece en el tiempo más inesperado. Sigamos nutriendo su relación y permitamos que crezca.",
    "La vida está tejida con hilos impredecibles. Quién sabe qué maravillas les depara el futuro. Mantengan la esperanza en alto.",
    "Aunque el amor no siga el guión que imaginaron, el valor de su unión es incalculable.",
    "Los corazones pueden encontrar su sincronía en el ritmo perfecto. No importa cuánto tiempo lleve, su unidad es extraordinaria.",
    "A pesar de los desafíos que el amor pueda presentar, su amistad es un tesoro que merece ser celebrado en toda su magnitud.",
    "El tiempo es un maestro revelador de secretos. Sigamos explorando juntos y descubramos las maravillas que tiene reservadas.",
    "La vida es una caja de sorpresas infinitas. Manténganse abiertos a las posibilidades que aún están por desvelarse.",
    "En ocasiones, el amor crece en los lugares menos esperados, como una semilla que florece en el corazón.",
    "Las conexiones genuinas a menudo se forjan en la base de una amistad sólida. Cultiven esa base con cariño y atención.",
    "El amor a menudo toma su tiempo para madurar, como un buen vino que mejora con los años. Sigamos enriqueciendo esta historia.",
    "La vida es un viaje inexplorado y el amor es el compañero de viaje más fiel. Disfruten de cada paso en este emocionante camino juntos.",
    "A veces, el amor no sigue un plan preestablecido, pero eso no le quita su magia única. Su historia es especial de una manera única.",
    "El tiempo puede revelar las bellezas ocultas de una relación. Manténganse abiertos a las sorpresas que el futuro tiene reservadas.",
    "Como dijo Robert Frost: 'Dos caminos se bifurcaron en un bosque, y yo... Yo tomé el menos transitado, y eso marcó la diferencia'. Su camino juntos es único y especial.",
    "En las palabras de Paulo Coelho: 'Cuando realmente deseas algo, el universo entero conspira para ayudarte a lograrlo'. Su amor es un deseo hecho realidad.",
    "Cada día juntos es una página en blanco para escribir su historia de amor. ¡Que cada día esté lleno de aventuras y momentos especiales!",
    "La vida es un rompecabezas en constante evolución, y ustedes son las piezas perfectas para encajar en él. Disfruten resolviendo juntos ese misterio."
  ];
  const loveDescription = isHighLove ? "tienen una conexión profunda, ya casense mmg" : "no te quiere, entiende ";
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const loveMessage = isHighLove ? getRandomMessage(loveMessages) : getRandomMessage(notSoHighLoveMessages);
  const response = `
💘🌟 *MENSAJE DE AMOR* 🌟💘

🔮 En el rincón del corazón, ${text} y @${m.sender.split('@')[0]} tienen una conexión mágica del ${lovePercentage}%.

❤️ ¡El amor florece como las flores en primavera! ${loveMessage}

💘🌟 *MENSAJE DE AMOR* 🌟💘
`;
  async function loading() {
var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%"
]
   let { key } = await conn.sendMessage(m.chat, {text: `*💞 ¡Calculando Porcentaje! 💞*`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['love'];
handler.tags = ['fun'];
handler.command = /^(love|amor)$/i;
export default handler;
