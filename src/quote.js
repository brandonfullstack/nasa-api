export default class Quote {
    static async getQuote() {
     
            const response = await fetch(`https://type.fit/api/quotes`)

            const data = await response.json()
            const random = Math.floor(Math.random() * data.length);

            return data[random];
        
    }
}   


// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//             return response[getRandomInt(0,response.length + 1)].json();
// export default class Quote {
//     static async getQuote() {
//         const plainString = {message: "Brandon was here."}
//         return plainString
//     }
// }
