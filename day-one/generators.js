function* Add(x){
    yield x + 1;
    let y = yield(null)
    y=6
    return x + y
}

let gen = Add(5)
console.log(gen.next())
console.log(gen.next())