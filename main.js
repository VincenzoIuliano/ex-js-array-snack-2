const books = [
    { 
        title: "React Billionaire", 
        pages: 250, 
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    { 
        title: "Advanced JS", 
        pages: 500, 
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    { 
        title: "CSS Secrets", 
        pages: 320, 
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    { 
        title: "HTML Mastery", 
        pages: 200, 
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
  ];

// SNACKS

const longBooks = books.filter((book => book.pages > 300))
console.log(longBooks);

// const longBooksTitles = longBooks.map(book => book.title)
// console.log(longBooksTitles);

// const titles = books.map(book => book.title)
// console.log(titles);

// const availableBooks = books.filter(book => book.available)
// console.log(availableBooks);

// const discountedBooks = availableBooks.map(book => {
//     const price = parseFloat(book.price.replace('€',''));
//     const discountPrice = (price * 0.8).toFixed(2);
//     return {
//         ...book,
//         price: `${discountPrice}€`
//     }
// })
// console.log(discountedBooks);

// const fullPriceBook = discountedBooks.find(book => {
//     const price = parseFloat(book.price.replace('€',''));
//     return price % 1 == 0
// })

// console.log(fullPriceBook);

// const authors = books.map(book => book.author)
// console.log(authors);

// const areAuthorsAdults = authors.every(a => a.age >= 18)
// console.log(areAuthorsAdults);

// if (areAuthorsAdults) {
//     authors.sort((a,b) => a.age - b.age)
// } else {
//     authors.sort((a,b) => b.age - a.age)
// }
// console.log(authors);

// const ages = books.map (b => b.author.age)
// console.log(ages);

// const agesSum = ages.reduce((acc, age) => acc + age, 0)
// console.log(agesSum);

// console.log(`L'età media è:${agesSum / ages.length}`)

// BONUS 

// const areThereAvaiableBooks = books.some(b => b.available);
// console.log(areThereAvaiableBooks);

// const booksbyPrice = [...books].sort((a,b) => {
//     const priceA = parseFloat(a.price.replace('€',''));
//     const priceB = parseFloat(b.price.replace('€',''));

//     return priceA - priceB;
// })
// console.log(booksbyPrice);

// booksbyPrice.sort((a,b) => a.available === b.available ? 0 : a.available ? -1 : 1)
// console.log(booksbyPrice);
