export const resize = ( imageUrl, size ) => {
   const url = [imageUrl.slice(0, 50), `w_${ size }` ,imageUrl.slice(49)];
   return url.reduce( (accum, item) => accum + item, '' );
};