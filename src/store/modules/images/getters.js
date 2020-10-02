export default {
    images(state){
        return state.images
    },
    hasImages(state){
        return state.images && state.images.length > 0;
    }
};