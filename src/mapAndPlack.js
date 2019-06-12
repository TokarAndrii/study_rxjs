import { interval, from } from 'rxjs';
import { take, mergeMap, map, delay, pluck } from 'rxjs/operators';
import axios from 'axios';
console.log('map & pluck ...');


const sourse$ = interval(500).pipe(
    take(10),
    map(val => val * 10)
);

sourse$.subscribe(
    value => console.log(value),
    err => console.log('Oopps some went wrong at sourse$: ', err),
    () => console.log('completed')
);


const users$ = from(axios.get('https://jsonplaceholder.typicode.com/users')).pipe(
    delay(7000),
    map(resp => resp.data),
    mergeMap(user => user),
    pluck('username'),
);

users$.subscribe(
    value => console.log(value),
    err => console.log('Oopps some went wrong at sourse$: ', err),
    () => console.log('completed')
)