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
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length < 1) return;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }
}
