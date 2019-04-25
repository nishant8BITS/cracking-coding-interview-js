interface INode<T> {
  value: T;
  next?: INode<T>;
}

export class LinkedList<T> {
  private head: INode<T> = null;
  private tail: INode<T> = null;
  private EMPTY_NODE: INode<T> = { value: null, next: null };

  private node(value: T): INode<T> {
    return { value, next: null };
  }

  /**
   *  Check Weather Linked List is empty or not
   */
  public isEmpty(): boolean {
    return !this.head;
  }

  public append(value: T): LinkedList<T> {
    const node = this.node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.appendToEnd(node);
    }

    return this;
  }

  public appendToEnd(node: INode<T>): LinkedList<T> {
    this.tail.next = node;
    this.tail = node;

    return this;
  }

  /**
   * Insert Item In LinkedList
   * @param value
   */
  public insert(value: T): LinkedList<T> {
    const node = this.node(value);
    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    return this;
  }

  public delete(value: T): boolean {
    let deleted: boolean = false;

    if (this.isEmpty()) {
      return deleted;
    }

    let current = this.head || this.EMPTY_NODE;

    while (current.next) {
      if (current.next.value === value) {
        deleted = true;
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = current;
    }

    return deleted;
  }

  public toArray(): T[] {
    const result: T[] = [];
    let node = this.head;

    while (node) {
      result.push(node.value);
      node = node.next;
    }

    return result;
  }

  public fromArray(values: T[]): LinkedList<T> {
    values.forEach(v => this.append(v));
    return this;
  }

  public print() {
    let current = this.head || this.EMPTY_NODE;
    let list = [];

    do {
      list.push(current.value);
      current = current.next;
    } while (current);

    console.log(list.join("->"));
  }
}

const list = new LinkedList<number>();
list.fromArray([1, 2, 3, 4, 5, 6]);
list.print();
