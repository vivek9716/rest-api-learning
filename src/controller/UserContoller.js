


class UserContoller {

    constructor() {
      this.users = this.users.bind(this);
    }

    users(req, res) {
      var users = [
        {
          id: 1,
          name: 'Vivek Chaudhary'
        },
        {
          id: 2,
          name: 'Ravi Chaudhary'
        }
      ]
      res.json(users);
    }

    createUser (req, res) {
      res.json(req.body);
    }

}

module.exports = UserContoller;
