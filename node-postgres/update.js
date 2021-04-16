const client = require('./client')

const fs = require('fs')

let update = JSON.parse(fs.readFileSync('../update.json', 'utf-8'));

async function run () {
    await client.connect()
    console.time('pg-update')
    await test()
    console.timeEnd('pg-update')
    await client.end()
}

async function test () {
    let i = 1
    for(i = 1; i <= 10000; i++) {
            await client.query(`
            UPDATE posts 
            SET author_id=$2, 
            title=$3, 
            description=$4, 
            content=$5, 
            date=$6
            WHERE id = $1`, 
            [i, update.author_id, update.title, update.description, update.content, update.date])
        }

}

run()