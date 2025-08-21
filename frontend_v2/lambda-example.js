// Ejemplo de función Lambda para Personal Pay
exports.handler = async (event) => {
    const { httpMethod, path, body } = event;
    
    // Headers CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE'
    };
    
    try {
        switch (path) {
            case '/balance':
                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify({
                        balance: 12450.00,
                        currency: 'ARS'
                    })
                };
                
            case '/transactions':
                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify([
                        {
                            id: 1,
                            type: 'income',
                            amount: 2000,
                            description: 'Recarga Personal',
                            date: new Date().toISOString()
                        }
                    ])
                };
                
            case '/send':
                const { amount, recipient } = JSON.parse(body);
                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify({
                        success: true,
                        transactionId: Date.now(),
                        message: `Enviado $${amount} a ${recipient}`
                    })
                };
                
            default:
                return {
                    statusCode: 404,
                    headers,
                    body: JSON.stringify({ error: 'Endpoint no encontrado' })
                };
        }
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message })
        };
    }
};