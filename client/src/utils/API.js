import axios from "axios";

export default {
  // Gets all recaps
  getRecaps: function () {
    return axios.get("/api/recaps/");
  },
  // Gets the recap with the given id
  getRecap: function (id, uid) {
    return axios.get("/api/recaps/" + id);
  },
  // Deletes the recap with the given id
  deleteRecap: function (id) {
    return axios.delete("/api/recaps/" + id);
  },
  // Saves a recap to the database
  saveRecap: function (recapData) {
    return axios.post("/api/recaps", recapData);
  },
  updateRecap: function (id, recapData) {
    return axios.put("/api/recaps/" + id, recapData);
  },
  getAdminPass: function () {
    return axios.get("/api/admin-pass");
  }
};
