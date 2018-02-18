import unittest
import hello_world

class HelloWorldTests(unittest.TestCase):
    def test_hello(self):
        self.assertEqual(hello_world.hello(), 'Hello, World!')

if __name__ == '__main__':
    unittest.main()
