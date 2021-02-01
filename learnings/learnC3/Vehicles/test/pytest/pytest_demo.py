# Create unit test cases to validate add(),substract(),multiply() and divide method functionality written into demo.py
import pytest
import demo

def test_add():
    assert demo.add(10, 5) == 15
    assert demo.add(20, 10) == 30
def test_substract():
    assert demo.substract(10, 5) == 5
    assert demo.substract(10, 5) == 5
def test_divide():
    assert demo.divide(15, 5) == 3
    assert demo.divide(20, 10) == 2
def test_multiply():
    assert demo.multiply(10, 5) == 50
    assert demo.multiply(20, 10) == 200