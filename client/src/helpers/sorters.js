export const filters = ( array, prop, reverse = false ) => {
   switch (prop) {
      case 'name':
         if (reverse)  
            return array.sort( (a,b) => a.name > b.name );
         return array.sort( (a,b) => a.name < b.name );

      case 'category':
         if (reverse)  
            return array.sort( (a,b) => a.category > b.category );
         return array.sort( (a,b) => a.category < b.category );

      case 'price':
         if (reverse) 
            return array.sort( (a,b) => a.prices.retail > b.prices.retail );
         return array.sort( (a,b) => a.prices.retail < b.prices.retail );
         
      default:
         return array;
   };
};