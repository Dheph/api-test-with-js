import {app} from './app';

let port:Number = 3333

app.listen(port, () => {
    console.log(`running on port ${port}`)
});