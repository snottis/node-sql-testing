const client = require('./client')

const fs = require('fs')

let update = JSON.parse(fs.readFileSync('../update.json', 'utf-8'));

async function run () {
    await client.connect()
    console.time('pg-create')
    await test()
    console.timeEnd('pg-create')
    await client.end()
}

async function test () {
    let i = 1
    for(i = 1; i <= 10000; i++) {
            await client.query(`
            INSERT INTO posts (author_id, title, description, content, date) VALUES($1,$2,$3,$4,$5)`, 
            [update.author_id, update.title, update.description, update.content, update.date])
        }

}

run()