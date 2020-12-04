const token = "1426608804:AAG2xn-uWTOpPPeZgKPfcKyMftKgOCdFqZQ";
const { Telegraf } = require("telegraf");
const cron = require("node-cron");

const bot = new Telegraf(token);
bot.start((ctx) => {
  cron.schedule("0 0 2 * * *", () => {
    ctx.reply(
      "hai kuli waktunya absen https://docs.google.com/forms/d/e/1FAIpQLSfsdDI9hbNwmfYFecUTDpk96gNyNT2tVNTt2wy_Xw2_PQMMWQ/viewform"
    );
  });
  ctx.reply("sudah run");
});

bot.hears("hai", (ctx) => ctx.reply("hai para kuli pembangun negri"));
bot.hears("Assalamualaikum", (ctx) =>
  ctx.reply("waalaikumsalam ya ahli jannah")
);
bot.hears("Assalamualaikum", (ctx) =>
  ctx.reply("waalaikumsalam ya ahli jannah")
);
bot.hears("p", (ctx) => {
  ctx.reply("lebih baik gunakan salam yang baik dan benar wahai kuli");
});
bot.hears("P", (ctx) => {
  ctx.reply("lebih baik gunakan salam yang baik dan benar wahai kuli");
});

bot.command("linksen", (ctx) => {
  ctx.reply(
    "https://docs.google.com/forms/d/e/1FAIpQLSfsdDI9hbNwmfYFecUTDpk96gNyNT2tVNTt2wy_Xw2_PQMMWQ/viewform"
  );
});

bot.launch();
