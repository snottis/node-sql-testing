const knex = require('./knex/knex')

async function run() {
    console.time('knex-delete')
    await test()
    console.timeEnd('knex-delete')
    knex.destroy()
}

async function test() {
    let i = 1
    for(i = 1; i <= 10000; i++){
        await knex('posts').where('id', i).del()
    }

}

run()