const mineflayer = require("mineflayer");

function createBot() {
  const bot = mineflayer.createBot({
    host: "OGonly.aternos.me:23390", // <-- මෙහි ඔබගේ Aternos Server IP එක දාන්න
    port: 23390, // <-- Aternos දීලා තියෙන port එක දාන්න
    username: "ShangeLokuAyya", // cracked නම් username පමණයි
  });

  bot.on("spawn", () => {
    console.log("✅ Bot spawned!");

    setInterval(() => {
      bot.setControlState("forward", true);
      setTimeout(() => {
        bot.setControlState("forward", false);
      }, 1000);
    }, 30000); // every 30 seconds
  });

  bot.on("end", () => {
    console.log("❌ Bot disconnected. Reconnecting...");
    setTimeout(createBot, 5000);
  });

  bot.on("error", err => {
    console.log("❌ Error:", err.message);
  });
}

createBot();
