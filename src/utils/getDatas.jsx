import User from "../models/User";
import Session from "../models/Session";
import Performance from "../models/Performance";
import Activity from "../models/Activity";

/**
 * @description This class provides methods which fetch datas from mocked data or API
 */
export default class GetData {
  /**
   * @description gets the user information (depends on userID)
   * @param {number} userId  id of the user
   * @returns A promise with the User model object of this user
   */
  async getInfo(userId) {
    try {
      //for using mocked data
      //const response = await fetch("../user/" + userId + ".json");
      //for using API
      const response = await fetch("http://localhost:3001/user/" + userId);
      const data = await response.json();
      return new User(data.data);
    } catch (error) {
      console.error(error);
      //for using mocked data
      /*document.location.href =
        "https://sportsee-p12-dfe-oc-herault-benedicte.netlify.app/profile";*/
      //for using API
      document.location.href = "http://localhost:3000/profile";
    }
  }

  /**
   * @description gets the user  activity data (depends on userID)
   * @param {number} userId id of the user
   * @returns A promise with the Activity of this user
   */
  async getActivity(userId) {
    try {
      //for using mocked data
      //const response = await fetch("../user/" + userId + "/activity.json");
      //for using API
      const response = await fetch(
        "http://localhost:3001/user/" + userId + "/activity"
      );
      const data = await response.json();
      return new Activity(data.data);
    } catch (error) {
      console.error(error);
      //for using mocked data
      /*document.location.href =
        "https://sportsee-p12-dfe-oc-herault-benedicte.netlify.app/profile";*/
      //for using API

      document.location.href = "http://localhost:3000/profile";
    }
  }

  /**
   * @description gets the user average session data (depends on userID)
   * @param {number} userId id of the user
   * @returns  A promise with the Session of this user
   */
  async getAverageSession(userId) {
    try {
      //for using mocked data
      /* const response = await fetch(
        "../user/" + userId + "/average-session.json"
      );*/
      //for using API
      const response = await fetch(
        "http://localhost:3001/user/" + userId + "/average-sessions"
      );
      const data = await response.json();
      return new Session(data.data);
    } catch (error) {
      console.error(error);
      //for using mocked data
      /*document.location.href =
        "https://sportsee-p12-dfe-oc-herault-benedicte.netlify.app/profile";*/
      //for using API
      document.location.href = "http://localhost:3000/profile";
    }
  }

  /**
   * @description gets the user performance data (depends on userID)
   * @param {number} userId id of the user
   * @returns A promise with the Performance of this user
   */
  async getPerformance(userId) {
    try {
      //for using mocked data
      //const response = await fetch("../user/" + userId + "/performance.json");
      //for using API
      const response = await fetch(
        "http://localhost:3001/user/" + userId + "/performance"
      );
      const data = await response.json();
      return new Performance(data.data);
    } catch (error) {
      console.error(error);
      //for using mocked data
      /*document.location.href =
        "https://sportsee-p12-dfe-oc-herault-benedicte.netlify.app/profile";*/
      //for using API
      document.location.href = "http://localhost:3000/profile";
    }
  }
}
