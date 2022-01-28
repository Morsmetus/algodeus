import { Node } from './Node';

export class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        const nextNode = this.top;

        this.top = newNode;
        this.top.next = nextNode;

        if (!this.bottom) {
            this.bottom = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.bottom) return;
        this.top = this.top.next;
        if (this.length === 1) {
            this.bottom = null;
        }
        this.length--;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }
}

export class StackWithArray {
    constructor() {
        this.stack = [];
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    print() {
        return this.stack;
    }

    push(value) {
        this.stack.push(value);
        return this;
    }

    pop() {
        this.stack.pop();
        return this;
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}
