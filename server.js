import * as Routes from '~/routes';

import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8008;
const app = next({ dev, quiet: false });

app.prepare().then(() => {
    const server = express();

    server.get('/', async (req, res) => {
        return await Routes.signIn(req, res, app);
    })

    server.listen(port, err => {
        if (err) {
            throw err;
        }

        console.log(`Server running on http://localhost:${port}`)
    })
})