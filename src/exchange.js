export default class Exchange {
    static async getExchangeRate() {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/7c58c4e8a9a9f439f2919ddc/pair/EUR/GBP`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        } catch (error) {
            return error.message;
        }
    }
} 