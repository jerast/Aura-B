export const resize = ( imageUrl, size ) => {
   let url = [imageUrl.slice(0, 50), imageUrl.slice(49)];
   url.splice(1, 0, `w_${ size }`);

   return url.reduce( (accum, item) => accum + item, '' );
};