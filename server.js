const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(request, response){
    response.sendFile('/Users/macbook/Desktop/Diet-App/diet-app.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});