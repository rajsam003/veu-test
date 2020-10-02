import ApiService from "../apiService";

export default class ImageService extends ApiService{
  getImageServiceUrl(data) {
    if(data.pageNumber && data.limit){
      return `${super.getServiceUrl()}/list?page=${data.pageNumber}&limit=${data.limit}`;
    }
    return `${super.getServiceUrl()}/list`;
  }

  getImages(data) {
    return super.get({
      url: this.getImageServiceUrl(data)
    });
  }
}
