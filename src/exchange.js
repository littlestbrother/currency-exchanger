export default class Exchange {
    static async getExchangeRate() {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.KEY}/pair/EUR/GBP`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        } catch (error) {
            return error;
        }
    }
} 