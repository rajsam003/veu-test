import Api from "../../../service/main";

export default {
   loadImages(context, payload) {
    return Api.images
    .get(payload)
    .then(response => {
      context.commit('setImages', response.data)
    })
    .catch(error => {
      console.error(error);
      throw error;
    });

    
  },
};
