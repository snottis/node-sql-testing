const client = require('./client')

async function run () {
    await client.connect()
    console.time('pg-read')
    await test()
    console.timeEnd('pg-read')
    await client.end()
}

async function test () {
    let i = 1
    let j = 0
    for(j = 0; j < 3; j++) {
        for(i = 1; i <= 10000; i++) {
            await client.query('SELECT * FROM posts WHERE id = $1', [i])
        }
    }

}

run()