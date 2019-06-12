console.log('events...');
import { fromEvent } from 'rxjs';


const btn = document.querySelector("#btn");
const btnStream$ = fromEvent(btn, 'click');

btnStream$.subscribe(
    (e) => {
        const { target } = e;
        const { innerHTML } = target;
        console.log(innerHTML);
    },
    (err) => console.log('[error]: ', err),
    () => console.log('completed')
);


const mouseMoveStream$ = fromEvent(document, "mousemove")

mouseMoveStream$.subscribe(
    (e) => {
        console.log('X:', e.clientX, ' Y:', e.clientY);
    },
    (err) => console.log('[error]: ', err),
    () => console.log('completed')
);