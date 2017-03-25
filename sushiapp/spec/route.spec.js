var request = require("request");
var root = "http://localhost:3000";

describe("index", function() {
  it("get index page", function(done) {
    request.get(root, function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      done();
    });
  });
  it("get  menu items in an array", function(done) {
    request.get(root + "/menu", function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      expect(response.toJSON().body.length).toBeGreaterThan(0);
      done();
    });
  });  
});