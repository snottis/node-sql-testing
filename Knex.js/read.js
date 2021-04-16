const knex = require('./knex/knex')
async function run() {
    console.time('knex-read')
    await test()
    console.timeEnd('knex-read')
    knex.destroy()
}
async function test() {
    let i = 1
    let j = 0
    for(j = 0; j < 3; j++) {
        for(i = 1; i <= 10000; i++){
            await knex('posts').where('id', i)
            }
    }

}

run()
