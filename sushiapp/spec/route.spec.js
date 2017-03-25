var request = require("request");
var root = "http://localhost:3000";

describe("index", function() {
  it("returns a list of menus", function(done) {
    request.get(root, function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      done();
    });
  });
});