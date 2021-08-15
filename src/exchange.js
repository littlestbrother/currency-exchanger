export default class Exchange {

    static async getExchangeRate(currency) {
        switch (currency) {
            case 'JPY':
            case 'ILS':
            case 'GBP':
            case 'EUR':
            case 'MXN':
                try {
                    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.KEY}/pair/USD/${currency}`);
                    if (!response.ok) {
                        throw Error(response.statusText);
                    } else {
                    return response.json();
                    }
                } catch (error) {
                    return error;
                }
            default:
                // console.error('unacceptable currency!');
                throw Error('unnacceptable currency!');
                // return Error
        }

    }
}