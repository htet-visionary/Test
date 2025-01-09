// Question 1

let input = [1, 2, 3, 2, 4, 1, 5];

let removeDuplicates = (numbers) => {
    let newArr = [];
    for (let i=0; i<numbers.length; i++) {
        if (!newArr.includes(numbers[i])) {
            newArr.push(numbers[i]); 
        }
    }
    return newArr;
};

console.log(removeDuplicates(input));

// Question 2

const obj1 = { a: 1, b: "hello", c: true, d: 3 }
const obj2 = { b: "world", c: false, d: 4, e: "new" }

let mergeObjects = (obj1, obj2) => {
    let merged = {...obj1};
    for(key in obj2) {
        if(key in obj1) {
            if(typeof(obj1[key]) == 'number' && typeof(obj2[key]) == 'number') {
                merged[key] = obj1[key]+obj2[key];
            } else if (typeof(obj1[key]) == 'string' && typeof(obj2[key]) == 'string') {
                merged[key] = `${obj1[key]} ${obj2[key]}`
            } else merged[key] = obj2[key];
        } else merged[key] = obj2[key];
    }
    return merged;
}

console.log(mergeObjects(obj1, obj2));

// Question 3

let books = [
    { title: "The Great Gatsby", author: "F. ScottFitzgerald", available: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", available: false },
    { title: "1984", author: "George Orwell", available:true },
    { title: "Animal Farm", author: "George Orwell", available: true }
]; 

let findAvailableBooks = (books, author) => {
    let newArr = [];
    for(let i=0; i<books.length; i++) {
        if(books[i].author == author) {
            newArr.push(books[i].title);
        }
    }
    return newArr;
}

console.log(findAvailableBooks(books, "George Orwell")); 
