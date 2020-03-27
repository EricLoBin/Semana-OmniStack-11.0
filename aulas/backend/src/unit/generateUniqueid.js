const crypto = require('crypto');

export default function generateUniqueid() {
    return crypto.randomBytes(4).toString('HEX');
}