export class ListNode {
    /**
     * @param {number} val 
     * @param {ListNode} next 
     */
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }

    getNodes() {
        const output = [this.val];
        let next = this.next;

        while(next) {
            output.push(next.val);
            next = next.next;
        }

        return output;
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let dummyHead = new ListNode();
    let currentListNode = dummyHead;

    while(l1 || l2 || sum !=0) {
        if (l1) {
            sum+= l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum+= l2.val;
            l2 = l2.next;
        }

        currentListNode.next = new ListNode(sum % 10);
        currentListNode = currentListNode.next;
        sum = Math.floor(sum / 10);
    }

    return dummyHead.next;
};