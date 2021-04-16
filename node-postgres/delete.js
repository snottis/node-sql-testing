const client = require('./client')

async function run () {
    await client.connect()
    console.time('pg-delete')
    await test()
    console.timeEnd('pg-delete')
    await client.end()
}

async function test () {
    let i = 1
    for(i = 1; i <= 10000; i++) {
            await client.query(`
            DELETE FROM posts 
            WHERE id = $1`, 
            [i])
        }

}

run()