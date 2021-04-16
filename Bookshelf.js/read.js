const Post = require('./Post')

async function run() {
    console.time('bookshelf-read')
    await test()
    console.timeEnd('bookshelf-read')
    process.exit(0);
}

async function test() {
    let i = 1
    let j = 0
    for(j = 0; j < 3; j++) {
        for(i = 1; i <= 10000; i++){
            await new Post({'id': i}).fetch()
            }
    }

}

run()