book1 = {
    isbn: "1-23-4",
    title: "JS",
    author: "US",
    num_Of_Page: "300"

}

book2 = {
    isbn: '5-67-8',
    title: 'JAVA'
}

function merge(obj1, obj2){
    return {...obj1, ...obj2}
}

console.log(merge(book1, book2))