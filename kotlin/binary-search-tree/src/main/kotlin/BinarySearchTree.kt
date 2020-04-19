class BinarySearchTree<T : Comparable<T>> {

    data class Node<T>(
        val data: T,
        var left: Node<T>?,
        var right: Node<T>?
    )

    var root: Node<T>? = null

    fun insert(value: T) {
        if (root == null) {
            root = Node(value, null, null)
        } else {
            insert(value, root!!)
        }
    }

    private fun insert(value: T, root: Node<T>) {
        if (value <= root.data) {
            if (root.left == null) {
                root.left = Node(value, null, null)
             } else {
                insert(value, root.left!!)
            }
        } else {
            if (root.right == null) {
                root.right = Node(value, null, null)
            } else {
                insert(value, root.right!!)
            }
        }
    }

    fun asSortedList(): List<T> {
        val list = mutableListOf<T>()
        asSortedList(root, list)
        return list
    }

    fun asSortedList(root: Node<T>?, list: MutableList<T>) {
        if (root == null) {
            return
        }
        asSortedList(root.left, list)
        list.add(root.data)
        asSortedList(root.right, list)
    }

    fun asLevelOrderList(): List<T> {
        val output = mutableListOf<T>()

        val queue = mutableListOf<Node<T>?>()
        queue.add(root)

        while(queue.isNotEmpty()) {
            val node = queue.removeAt(0) ?: continue
            output.add(node.data)
            queue.add(node.left)
            queue.add(node.right)
        }

        return output
    }
}
