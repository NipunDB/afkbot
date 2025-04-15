const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'aternos-server-ip', // ඔබේ Aternos IP එක මෙතන
    port: 25565,
    username: 'BotName',       // bot නම
  });

  bot.on('spawn', () => {
    console.log('Bot spawned!');
    
    // AFK විදිහට මූව් වෙනවා
    setInterval(() => {
      bot.setControlState('forward', true);
      setTimeout(() => bot.setControlState('forward', false), 1000);
    }, 30000); // සෑම විනාඩි 0.5කට වතාවක්

  });

  bot.on('end', () => {
    console.log('Bot disconnected. Reconnecting...');
    setTimeout(createBot, 5000); // disconnect උනොත් 5s ඉන්පසු නැවත සම්බන්ධ වෙන්න
  });

  bot.on('error', (err) => console.log('Error:', err));
}

createBot();
