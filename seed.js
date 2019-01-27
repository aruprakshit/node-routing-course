const faker = require('faker');

const name = faker.name.findName(); // Rowan Nikolaus
const email = faker.internet.email(); // Kassandra.Haley@erich.biz
const message = faker.lorem.paragraph();

const data = JSON.stringify({ name, email, message }, null, 4);

process.stdout.write(data + '\n');
