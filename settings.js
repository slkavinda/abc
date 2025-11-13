const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=450f914fceb5e395=== 𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=eyQTyCjK#rmzn_ULzrT75PeGXoayBqU2TWkEFYBF26oVPLT9_L3Y ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=32pQlDLS#EM2MbhJvScMPazpSfBf3MAlkrFxUzwuv-5rKwhdhFqI' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === ture ? 'postgresql://postgres:@Asitha2005b@db.waiqbrnuxkjebghzhovz.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL,
};
