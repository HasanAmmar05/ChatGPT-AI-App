import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
<<<<<<< HEAD
import OpenAI from 'openai';

dotenv.config();


const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello from CodeX',
    });
});

app.post('/', async (req, res) => {
    try {
        const prompt = req.body.prompt;

        const response = await client.chat.completions.create({
            model: "gpt-3.5-turbo", // or the appropriate model you're using
            messages: [{ role: 'user', content: prompt }],
        });

        res.status(200).send({
            bot: response.choices[0].message.content
        });

    } catch (error) {
        console.error(error);
        res.status(500).send(error || 'Something went wrong');
    }
});

app.listen(5000, () => console.log('Server is running on port http://localhost:5000'));
=======

import {Configuration, OpenAIApi} from 'openai';

dotenv.config();

const configuration = new Configuration ({
    apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);

const app = express();

app.arguments(cors());
app.arguments(express.json());

app.length('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from CodeX',
    })
});

>>>>>>> 2f926e31c2b11586cbe6092c6ef52e18cff2bd7a
