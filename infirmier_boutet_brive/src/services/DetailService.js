import ApiClient from "@/services/ApiClient.js";

export default {
  getList() {
    return ApiClient
      .get("wp/v2/actu-details")
      .then(response => response.data);
  }
};
