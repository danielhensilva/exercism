export class BinarySearchTree {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(value, root = this) {
    if (root.data >= value) {
      if (root.left == null) {
        root.left = new BinarySearchTree(value)
        return
      }
      this.insert(value, root.left)
    }
    else if (root.data < value) {
      if (root.right == null) {
        root.right = new BinarySearchTree(value)
        return
      }
      this.insert(value, root.right)
    }
  }

  each(func, root = this) {
    if (root.left) {
      this.each(func, root.left)
    }
    func(root.data)
    if (root.right) {
      this.each(func, root.right)
    }
  }
}