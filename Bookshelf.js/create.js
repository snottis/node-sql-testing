const Post = require('./Post')
const fs = require('fs')

let update = JSON.parse(fs.readFileSync('../update.json', 'utf-8'));

async function run() {
    console.time('bookshelf-create')
    await test()
    console.timeEnd('bookshelf-create')
    process.exit(0);
}

async function test() {
    let i = 1
    for(i = 1; i <= 10000; i++){
        await new Post({...update}).save()
    }

}

run()