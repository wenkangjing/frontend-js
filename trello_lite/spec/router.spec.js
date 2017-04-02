var request = require("request");
var root = "http://localhost:3000";

describe("Router Spec", function() {
  it("returns an array of List", function(done) {
    request.get(root + "/lists", function(error, response, body) {
      var json = response.toJSON();
      expect(json.statusCode).toEqual(200);
      expect(json.body.length).toBeGreaterThan(0);
      done();
    });
  });

  it("returns an array of Cards", function(done) {
    request.get(root + "/cards", function(error, response, body) {
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

  it("returns an array of Color", function(done) {
    request.get(root + "/colors", function(error, response, body) {
      var json = response.toJSON();
      expect(json.statusCode).toEqual(200);
      expect(json.body.length).toBeGreaterThan(0);
      done();
    });
  });   
});


