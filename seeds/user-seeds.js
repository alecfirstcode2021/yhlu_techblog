const { User } = require('../models');

const userData = [{
        username: 'Akira',
        password: 'dontsaygoodby'

    },
    {
        username: 'Abula',
        password: 'taiwancanhelp'
    },
    {
        username: 'Aniki',
        password: 'iamtaiwanese'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;