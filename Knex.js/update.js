const knex = require('./knex/knex')
const fs = require('fs')

let update = JSON.parse(fs.readFileSync('../update.json', 'utf-8'));

async function run() {
    console.time('knex-update')
    await test()
    console.timeEnd('knex-update')
    knex.destroy()
}

async function test() {
    let i = 1
    for(i = 1; i <= 10000; i++){
        await knex('posts').where('id', i).update({...update})
    }

}

run()