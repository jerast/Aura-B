export const filters = ( origin, params ) => {
   let result = origin;

   [...Object.entries( params )].forEach( param => 
      result = result.filter( product => {
         try {
            if (product[ param[0] ].toLowerCase().includes( param[1].toLowerCase() )) 
               return product;
         } catch  {
            return;
         }
      })
   );

   return result;
};