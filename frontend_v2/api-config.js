// Configuración para conectar con Lambda via API Gateway
const API_CONFIG = {
    baseURL: 'https://your-api-id.execute-api.us-east-1.amazonaws.com/prod',
    endpoints: {
        getBalance: '/balance',
        getTransactions: '/transactions',
        sendMoney: '/send',
        recharge: '/recharge'
    }
};

// Funciones para llamar al backend
async function apiCall(endpoint, method = 'GET', data = null) {
    const url = `${API_CONFIG.baseURL}${endpoint}`;
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    };
    
    if (data) {
        options.body = JSON.stringify(data);
    }
    
    const response = await fetch(url, options);
    return response.json();
}

// Ejemplos de uso
const getBalance = () => apiCall(API_CONFIG.endpoints.getBalance);
const sendMoney = (amount, recipient) => apiCall(API_CONFIG.endpoints.sendMoney, 'POST', {amount, recipient});