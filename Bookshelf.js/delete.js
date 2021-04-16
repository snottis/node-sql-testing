const Post = require('./Post')

async function run() {
    console.time('bookshelf-delete')
    await test()
    console.timeEnd('bookshelf-delete')
    process.exit(0);
}

async function test() {
    let i = 1
    for(i = 1; i <= 10000; i++){
        await new Post({id: i}).destroy()
    }

}

run()