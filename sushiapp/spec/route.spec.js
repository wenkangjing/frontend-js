var request = require("request");
var root = "http://localhost:3000";

describe("menu", function() {
  it("get menu view", function(done) {
    request.get(root, function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      done();
    });
  });
  it("get menu items in an array", function(done) {
    request.get(root + "/menu", function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      expect(response.toJSON().body.length).toBeGreaterThan(0);
      done();
    });
  });
  it("get menu detail view", function(done) {
    request.get(root + "/menu/2", function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      done();
    });
    request.get(root + "/menu/8", function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      done();
    });
  });
  it("get checkout view", function(done) {
    request.get(root + "/checkout", function(error, response, body) {
      expect(response.toJSON().statusCode).toEqual(200);
      done();
    });
  });  
});