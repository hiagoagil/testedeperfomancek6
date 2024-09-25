import http from 'k6/http';
import { sleep, check } from 'k6';
import { generateUUID } from './tests/libs/uuid.js'; 

export const options = {
    vus: 10,
    duration: '1s',
};

export default function () {

    let id = generateUUID();
    console.log(`Generated UUID: ${id}`);

    
    const url = 'http://localhost:3333/signup'; 
    const payload = JSON.stringify({
        email: `${id}@qa.tester.com.br`, 
        password: '200611',
    });

    const headers = {
        'Content-Type': 'application/json', 
    };

    const res = http.post(url, payload, { headers }); 

    console.log(`Response status: ${res.status}`);


    check(res, {
        'status should be 201': (r) => r.status === 201,
    });

    sleep(1); 
}
