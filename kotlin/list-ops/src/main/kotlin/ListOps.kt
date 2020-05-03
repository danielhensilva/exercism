fun List<Any>.customAppend(list: List<Any>): List<Any> {
    val newList = mutableListOf<Any>()
    for (item in this) { newList.add(item) }
    for (item in list) { newList.add(item) }
    return newList.toList()
}

fun List<Any>.customConcat(): List<Any> {
    val newList = mutableListOf<Any>()
    for (item in this) {

        if (item is List<*>) {
            for (i in (item as List<Any>).customConcat()) {
                newList.add(i)
            }
            continue
        }

        newList.add(item)

    }
    return newList
}

fun <T> List<T>.customFilter(predicate: (T) -> Boolean): List<T> {
    val newList = mutableListOf<T>()
    for (item in this) {
        if (predicate(item)) {
            newList.add(item)
        }
    }
    return newList
}

val List<Any>.customSize: Int get() {
    var size = 0
    for (item in this) { size += 1 }
    return size
}

fun <T, U> List<T>.customMap(transform: (T) -> U): List<U> {
    val newList = mutableListOf<U>()
    for (item in this) { newList.add(transform(item)) }
    return newList
}

fun <T, U> List<T>.customFoldLeft(initial: U, f: (U, T) -> U): U {
    var accumulator = initial
    for (item in this) {
        accumulator = f(accumulator, item)
    }
    return accumulator
}

fun <T, U> List<T>.customFoldRight(initial: U, f: (T, U) -> U): U {
    var accumulator = initial
    for (item in this.customReverse()) {
        accumulator = f(item, accumulator)
    }
    return accumulator
}

fun <T> List<T>.customReverse(): List<T> {
    val newList = mutableListOf<T>()
    for (i in this.size - 1 downTo 0) {
        newList.add(this[i])
    }
    return newList
}
