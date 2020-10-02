export const toImages = data => {
    if (data) {
      return {
        data: toImageArray(data)
      };
    } else {
      return null;
    }
  };

  export const toImageArray = data => {
    if (data && data.length) {
      return data.map(item => {
        return toImage(item);
      });
    } else {
      return [];
    }
  };

  export const toImage = data => {
    if (data) {
      return {
        id: data.id,
        author: data.author,
        width: data.width,
        height: data.height,
        url: data.url,
        download_url: data.download_url,
      };
    }
  };
