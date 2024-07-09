const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3033;

app.use(cors({origin: 'http://localhost:3000'}));

app.use(express.json());
app.post('/gethash', async (req, res) => {
    const { folio } = req.body;
    if (!folio) {
        return res.status(400).json({ error: 'El folio es requerido' });
    }

    try {
        const response = await axios.get(`http://localhost:8080/ms-practica/api/v1/gethash?folio=${folio}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error al hacer el consumo de ms-prueba:', error);
        res.status(500).json({ error: 'Error al hacer el consumo de ms-prueba' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => { 
    console.log('Servidor corriendo en puerto: '+ PORT);
});