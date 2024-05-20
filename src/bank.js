const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../../../users.db');
const db = new sqlite3.Database(dbPath);

async function getBank(userId) {
    return new Promise((resolve, reject) => {
        db.get('SELECT bank FROM users WHERE discordId = ?', [userId], (err, row) => {
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
        db.run('UPDATE users SET bank = ? WHERE discordId = ?', [newBalance, userId], function(err) {
            if (err) {
                console.error(err.message);
                reject(err); // Reject the promise with the error
            } else {
                console.log('Balance updated successfully.');
                resolve(); // Resolve the promise
            }
        });
    });
}

async function updatePunctuation(userId, betAmount) {
    return new Promise((resolve, reject) => {
        let punctuation = betAmount / 1000000;

        // First, get the current punctuation
        db.get('SELECT punctuation FROM leaderBoard WHERE discordId = ?', [userId], function(err, row) {
            if (err) {
                console.error(err.message);
                return reject(err); // Reject the promise with the error
            }

            let prevPunct = row ? row.punctuation : 0; // Handle the case where the row might not exist
            let realPunct = prevPunct + punctuation;
            // Then, update the punctuation
            db.run('UPDATE leaderBoard SET punctuation = ? WHERE discordId = ?', [realPunct, userId], function(err) {
                if (err) {
                    console.error(err.message);
                    return reject(err); // Reject the promise with the error
                }

                console.log('Punctuation updated successfully.');
                resolve(); // Resolve the promise successfully
            });
        });
    });
}


module.exports = { getBank, updateBank, updatePunctuation };

