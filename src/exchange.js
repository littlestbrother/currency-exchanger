export default class Exchange {

    static async getExchangeRate(currency, amount) {
        switch (currency) {
            case 'JPY':
            case 'ILS':
            case 'GBP':
            case 'EUR':
            case 'MXN':
                try {
                    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.KEY}/pair/USD/${currency}`);
                    if (!response.ok) {
                        return response.status;
                    } else {
                        return response.json();
                    }
                } catch (error) {
                    return error;
                }
            default:
                return 'unnacceptable currency!';
        }

    }
}