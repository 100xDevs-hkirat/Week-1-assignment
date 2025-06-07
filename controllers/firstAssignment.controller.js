const anagram = require("../01-js/easy/anagram");
const expenditureAnalysis = require("../01-js/easy/expenditure-analysis");
const palindrome = require("../01-js/medium/palindrome");
const times = require("../01-js/medium/times");
const calculator = require("../01-js/hard/calculator");
const todoList = require("../01-js/hard/todo-list");

exports.isAnagram = (req, res) => {
  try {
    //call 01-js
    const result = anagram.isAnagram(req.query.str1, req.query.str2);
    let message = "";
    if (result) {
      message = "Strings are anagram";
    } else {
      message = "Strings are not an anagram";
    }
    res.status(200).json({ message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getExpenditureAnalysis = (req, res) => {
  try {
    const result = expenditureAnalysis.calculateTotalSpentByCategory(
      req.body.transactions
    );
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.isPalindrome = (req, res) => {
  try {
    console.log(req.query.str);
    const result = palindrome.isPalindrome(req.query.str);
    let message = "";
    if (result) {
      message = "Input is a Palindrome";
    } else {
      message = "Input is not a Palindrome";
    }

    res.status(200).json({ message });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.calculateTimes = (req, res) => {
  try {
    const result = times.calculateTime(req.params.times);
    res.status(200).json({
      message: `Total time to calculate sum from 1 to ${req.params.times} is: ${result}`,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.calculator = (req, res) => {
  try {
    const obj = new calculator.Calculator(0);
    obj.calculate(req.body.exp);
    res.status(200).json({ result: obj.getResult });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const obj = new todoList.Todo();
exports.addToList = (req, res) => {
  try {
    obj.add(req.body.item);
    res.status(200).json({ result: obj.getAll() });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.removeFromList = (req, res) => {
  try {
    obj.remove(+req.params.index);
    console.log(obj.todoList);
    res.status(200).json({ result: obj.getAll() });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.update = (req, res) => {
  try {
    obj.update(+req.params.index, req.body.item);
    res.status(200).json({ result: obj.getAll() });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAll = (req, res) => {
  try {
    res.status(200).json({ result: obj.getAll() });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.get = (req, res) => {
  try {
    res.status(200).json({ result: obj.get(+req.params.index) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.clear = (req, res) => {
  try {
    obj.clear();
    res.status(200).json({ result: obj.getAll() });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
