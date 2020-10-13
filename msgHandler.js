/**
* Use for handling messages.
*/
class MsgHandler {

  static getGreeting (caller, input) {
    const value = (!isNaN(input) && Number.isInteger(input)) ? input : -1
    let foundIt = false
    let result = -1

    const options = {
      1: caller.sayCheese(),
      2: caller.sayHello(),
      3: caller.sayGoodnightInGreek(),
      4: caller.sayGoodbye(),
      666: caller.upTheIrons(),
      42: caller.sayGoodbye()
    }

    // if given value is found in options, foundIt is set true.
    // if foundIt is already true, it can't be set to false again
    for (let opt in options) {
      Number(opt) === value ? foundIt = true
        : foundIt ? foundIt = true : foundIt = false
    }

    foundIt ? result = options[value] : result = 'Could not compute given value.'

    return result
  }

}

module.exports = MsgHandler