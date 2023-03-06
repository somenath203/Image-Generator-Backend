require('dotenv').config();
const express = require('express');
const cors = require('cors');

const openAiRouter = require('./routes/openAiRoutes');


const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {

    res.status(200).json({
        success: true,
        message: 'server is up and running successfully.'
    });

});

app.use('/openai', openAiRouter);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});