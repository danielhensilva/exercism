NORTH = 0
EAST = 1
SOUTH = 2
WEST = 3


class Robot(object):

    def __init__(self, bearing=NORTH, x=0, y=0):
        self.bearing = bearing
        self.x = x
        self.y = y

    @property
    def coordinates(self):
        return self.x, self.y

    def turn_right(self):
        self.bearing = (self.bearing + 1) % 4

    def turn_left(self):
        self.bearing = (self.bearing - 1) % 4

    def advance(self):
        if self.bearing == NORTH:
            self.y += 1
        elif self.bearing == EAST:
            self.x += 1
        elif self.bearing == SOUTH:
            self.y -= 1
        elif self.bearing == WEST:
            self.x -= 1

    def simulate(self, steps):
        for step in steps:
            if step == 'A':
                self.advance()
            elif step == 'L':
                self.turn_left()
            elif step == 'R':
                self.turn_right()

