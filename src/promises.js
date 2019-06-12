import { from } from 'rxjs';
import { Observable } from 'rxjs';
import axios from 'axios';

console.log('promises...');

const myPromise = new Promise((resolve, reject) => {
    console.log('creating promise...');
    setTimeout(() => {
        resolve("Hello from promise")
    }, 2000)
});

myPromise.then(data => console.log('data from promise.then() - ', data));

const myPromise$ = from(myPromise);
myPromise$.subscribe(
    data => console.log('data from promise at myPromise$ -', data)
);

const getUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1')
}

const getUsers$ = from(getUsers())
    .subscribe(
        resp => console.log('data at getUsers$ -  ', resp.data),
        err => console.log('Oopps some went wrong: ', err)
    )



const getUsers2 = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1111')
}

const getUsers2$ = from(getUsers2())
    .subscribe(
        resp => console.log('data at getUsers$ -  ', resp.data),
        err => console.log('Oopps some went wrong at getUsers2$: ', err)
    )
