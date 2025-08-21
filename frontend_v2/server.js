const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir archivos estáticos
app.use(express.static(__dirname));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Personal Pay ejecutándose en http://localhost:${PORT}`);
    console.log('📱 Abre la URL en tu navegador para ver la aplicación');
});