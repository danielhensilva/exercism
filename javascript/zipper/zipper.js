export class Zipper {
  constructor(tree, focus, previous) {
    this.root = tree
    this.focus = focus
    this.previous = previous
  }

  static fromTree(tree) {
    return new Zipper(tree, tree, [])
  }

  toTree() {
    return this.root
  }

  value() {
    if (this.focus == null) {
      return null
    }
    return this.focus.value
  }

  left() {
    if (this.focus == null || this.focus.left == null) {
      return null
    }
    return new Zipper(this.root, this.focus.left, [...this.previous, this.focus])
  }

  right() {
    if (this.focus == null || this.focus.right == null) {
      return null
    }
    return new Zipper(this.root, this.focus.right, [...this.previous, this.focus])
  }

  up() {
    if (this.previous.length === 0) {
      return null
    }
    return new Zipper(this.root, this.previous.pop(), this.previous)
  }

  setValue(value) {
    const newFocus = {...this.focus, value}
    const newRoot = this.#updateRoot(newFocus)
    return new Zipper(newRoot, newFocus, this.previous)
  }

  setLeft(left) {
    const newFocus = {...this.focus, left}
    const newRoot = this.#updateRoot(newFocus)
    return new Zipper(newRoot, newFocus, this.previous)
  }

  setRight(right) {
    const newFocus = {...this.focus, right}
    const newRoot = this.#updateRoot(newFocus)
    return new Zipper(newRoot, newFocus, this.previous)
  }

  /**
   * Walk up the tree, replacing nodes with updated focus
   * @param {*} newFocus
   */
  #updateRoot(newFocus) {
    let current = newFocus

    const startIndex = this.previous.length - 1

    for (let i = startIndex; i >= 0; i--) {
      const parent = this.previous[i]

      const isFirstElement = i === startIndex
      const isLeftFocus = parent.left === this.focus
      const isLeftChild = parent.left === this.previous[i + 1]

      // Check if should change the left side of the parent node
      if (isLeftChild || (isFirstElement && isLeftFocus)) {
        current = {...parent, left: current}
        continue
      }

      // Otherwise, change the right side of the parent node
      current = {...parent, right: current}
    }

    return current
  }
}