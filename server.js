const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const fs = require('fs');

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Guardian Model running.....')
})


const run = () => {

    try {
        app.get("/model", (req, res) => {
            //res.writeHead(200, { 'Content-Type': 'application/json' })
            fs.readFile('model.json', (error, data) => {
                if (error) {
                    res.write('Data Read Felid')
                    res.end()
                }
                else {
                    res.write(data)
                    res.end()
                }
            })
        })
    }

    finally {

        // Console Close

    }
}

run();


app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})