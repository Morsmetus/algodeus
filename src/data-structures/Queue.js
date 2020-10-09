import { Node } from './Node';

export class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
        } else {
        }
    }

    dequeue() {}

    isEmpty() {
        return this.length === 0;
    }
}
