const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../users.db');

async function getBank(userId) {
    return new Promise((resolve, reject) => {
        db.get('SELECT bank FROM users WHERE userId = ?', [userId], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row ? row.bank : 0);
            }
        });
    });
}

// Function to update the bank balance
async function updateBank(userId, newBalance) {
    return new Promise((resolve, reject) => {
        db.run('INSERT OR REPLACE INTO users (userId, balance) VALUES (?, ?)', [userId, newBalance], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

module.exports = { getBank, updateBank };
