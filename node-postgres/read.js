const {Client} = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5433
})

async function run () {
    await client.connect()
    console.time('pg-read')
    await test()
    console.timeEnd('pg-read')
    await client.end()
}

async function test () {
    let i = 1
    for(i = 1; i <= 10000; i++) {
        await client.query('SELECT * FROM posts WHERE id = $1', [i])
    }
}

run()