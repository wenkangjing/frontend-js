var request = require("request");
var root = "http://localhost:3000";

describe("List", function() {
  it("returns an array of List", function(done) {
    request.get(root + "/lists", function(error, response, body) {
      var json = response.toJSON();
      expect(json.statusCode).toEqual(200);
      expect(json.body.length).toBeGreaterThan(0);
      done();
    });
  });

  it("returns an array of Label", function(done) {
    request.get(root + "/labels", function(error, response, body) {
      var json = response.toJSON();
      expect(json.statusCode).toEqual(200);
      expect(json.body.length).toBeGreaterThan(0);
      done();
    });
  });  
});


