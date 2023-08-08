export default class Quote {
    static async getQuote() {
        try {
            const response = await fetch(`https://api.quotable.io/random`)
            if(!response.ok) {
                const error = `${response.status} ${response.statusText}`;
                throw new Error(error)
            }
            return response.json();
        }
        catch(error) {
            return error;
        }
    }
}   
