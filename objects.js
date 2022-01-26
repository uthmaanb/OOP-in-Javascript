// console.log("hello world")

// // Factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw")
//     },
//   }
// }
// const circle = createCircle(1)

// // Constructor function
// function Circle(radius) {
//   this.radius = radius
//   this.draw = function () {
//     console.log("draw")
//   }
// }
// const another = new Circle(1)

// // net ninja OOP tut
// let userOne = {
//   email: "ryu@ninjas.com",
//   name: "Ryu",
// login() {
//   console.log(this.email, "has logged in")
// },

//   logout() {
//     console.log(this.email, "has logged out")
//   },
// }

// console.log(userOne.name)

// syntatic sugar, the Class keyword, makes it look like OOP but its still the prototyping technique!!
class User {
  constructor(email, name) {
    this.email = email
    this.name = name
    this.score = 0
  }
  login() {
    console.log(this.email, "has logged in")
    return this
  }
  logout() {
    console.log(this.email, "has logged out")
    return this
  }
  updateScore() {
    this.score++
    console.log(`${this.name}'s score is now ${this.score}`)
    return this
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email
    })
  }
}

let userOne = new User("ryu@ninja.com", "Ryu")
let userTwo = new User("yoshi@mariokorp.com", "Yoshi")
let admin = new Admin("shaun@ninjas.com", "Shaun")

userOne.age = 23
// console.log(userOne)
// console.log(userTwo)

let users = [userOne, userTwo, admin]

admin.deleteUser(userOne)

console.log(users)

// userOne.login().updateScore().updateScore().logout()
