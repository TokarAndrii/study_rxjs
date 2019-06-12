import { interval, timer, range } from 'rxjs';
import { take, delay } from 'rxjs/operators';

console.log('interval, timer & range...');


const takeFourNumbers$ = interval(1000).pipe(
    take(5)
);

takeFourNumbers$.subscribe(
    value => console.log(value),
    err => console.log('Oopps some went wrong at takeFourNumbers: ', err),
    () => console.log('completed')

);

const timerNumbers$ = timer(5000, 500).pipe(
    take(5)
);

timerNumbers$.subscribe(
    value => console.log(value),
    err => console.log('Oopps some went wrong at takeFourNumbers: ', err),
    () => console.log('completed')

);


const rangeNumbers$ = range(2000, 5).pipe(
    delay(10000)
)

rangeNumbers$.subscribe(
    value => console.log('value at rangeNumbers$ after delay', value),
    err => console.log('Oopps some went wrong at takeFourNumbers: ', err),
    () => console.log('completed')

)