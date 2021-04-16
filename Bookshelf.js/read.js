const Post = require('./Post')

async function run() {
    console.time('bookshelf-read')
    await test()
    console.timeEnd('bookshelf-read')
}

async function test() {
    let i = 1
    for(i = 1; i <= 10000; i++){
    await new Post({'id': i}).fetch()
    }
}

run()