import ApiService from "../apiService";

export default class ImagesMockService extends ApiService {
  constructor() {
    super();

    this.images = [
        {
            "id": "0",
            "author": "Alejandro Escamilla",
            "width": 5616,
            "height": 3744,
            "url": "http://unsplash.com/photos/yC-Yzbqy7PY",
            "download_url": "https://picsum.photos/id/0/5616/3744"
        },
        {
            "id": "1",
            "author": "Alejandro Escamilla",
            "width": 5616,
            "height": 3744,
            "url": "https://unsplash.com/photos/LNRyGwIJr5c",
            "download_url": "https://picsum.photos/id/1/5616/3744"
        },
        {
            "id": "2",
            "author": "Paul Jarvis",
            "width": 2500,
            "height": 1667,
            "url": "https://unsplash.com/photos/6J--NXulQCs",
            "download_url": "https://picsum.photos/id/10/2500/1667"
        },
        {
            "id": "3",
            "author": "Alejandro Escamilla",
            "width": 5616,
            "height": 3744,
            "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
            "download_url": "https://picsum.photos/id/0/5616/3744"
        },
        {
            "id": "4",
            "author": "Alejandro Escamilla",
            "width": 5616,
            "height": 3744,
            "url": "https://unsplash.com/photos/LNRyGwIJr5c",
            "download_url": "https://picsum.photos/id/1/5616/3744"
        }
    ]
  }

  getImages() {
    return Promise.resolve(this.images);
  }
}
