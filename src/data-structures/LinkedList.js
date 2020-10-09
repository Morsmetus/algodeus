import { Node } from './Node';

export class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        if (index === 0) {
            return this.prepend(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        newNode.next = holdingPointer;
        leader.next = newNode;
        this.length++;
        return this.printList();
    }

    remove(index) {
        if (index === undefined || index >= this.length) {
            return this.head;
        }
        const leader = this.traverseToIndex(index);
        if (leader.next) {
            leader.value = leader.next.value;
            leader.next = leader.next.next;
        } else {
            const prev = this.traverseToIndex(index - 1);
            prev.next = null;
        }
        this.length--;
        return this.printList();
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    reverse() {
        let first = this.head;
        this.tail = first;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }

    reverse2() {
        let prev = null;
        let curr = this.head;
        this.tail = curr;
        while (curr !== null) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head.next = null;
        this.head = prev;
        return this.printList();
    }
}
