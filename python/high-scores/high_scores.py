def latest(scores):
  return scores[-1]


def personal_best(scores):
  return max(scores)


def personal_top_three(scores):
  copied_scores = scores[:]
  copied_scores.sort(reverse=True)
  return copied_scores[0:3]