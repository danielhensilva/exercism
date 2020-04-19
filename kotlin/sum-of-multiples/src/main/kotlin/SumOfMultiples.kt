object SumOfMultiples {

    fun sum(factors: Set<Int>, limit: Int): Int {
        return (1 until limit)
            .filter { it anyMultiple factors }
            .sum()
    }

    private infix fun Int.anyMultiple(factors: Set<Int>): Boolean {
        return factors.any { this isMultiple it }
    }

    private infix fun Int.isMultiple(factor: Int): Boolean {
        if (factor > 0) {
            return this % factor == 0
        }
        return false
    }
}
