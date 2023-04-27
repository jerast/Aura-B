export const queryParams = ( params ) => {
   if ( !params ) return;

   let queryObject = {};

   const propsParams = params.slice(1).split('&');

   propsParams.map( property => {
      const object = property.split('=');
      queryObject[object[0]] = object[1];
   });

   return queryObject;
}; 