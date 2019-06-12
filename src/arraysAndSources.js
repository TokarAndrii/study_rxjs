import { from, of } from 'rxjs';
import { Observable } from 'rxjs';

console.log('arrays...');

const nums = [1, 2, 3, 4, 5, 6];
const nums$ = from(nums);
nums$.subscribe(
    val => console.log('val', val),
    err => console.log('error: ', err),
    () => console.log('Completed!')
);


console.log('sourse...');

const sourse$ = new Observable((observer) => {
    console.log('creating Observable');
    observer.next("hello world!!!");
    observer.next("other value");
    observer.complete();
});
sourse$.subscribe(
    value => console.log('value: ', value),
    err => console.log('error: ', err),
    () => console.log('Completed2!')
);

const sourse2$ = new Observable((observer) => {
    console.log('creating Observable2');
    observer.next("hello world!!!");
    observer.next("other value");
    observer.error(new Error('Error at Observable2!!!'));
});
sourse2$
    .catch(err => of(err))
    .subscribe(
        value => console.log('value: ', value),
        err => console.log('error: ', err),
        () => console.log('Completed!')
    );


