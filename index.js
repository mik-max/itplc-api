import express from 'express';
import Cors from 'cors';
import homeRouter from './src/routes/home.js';
import loginRouter from './src/routes/login.js';

const app = express()
const port = process.env.PORT || 8009
app.use(express.json());
app.use(Cors({origin: "*"}));

app.get('/', (req, res) => res.status(200).send('Hello CleverProgrammers!!!!!. CELZ4 API!!!🔥🔥'))
app.use('/api/v1', homeRouter)
app.use('/api/v1', loginRouter)


app.listen(port, () => console.log(`Listening on localhost: ${port}`));

