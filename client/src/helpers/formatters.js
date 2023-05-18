export const dateFormatter = ( value ) => 
   new Date( value ).toLocaleDateString();

export const currencyFormatter = ( value ) => 
   new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: 'COP',
      maximumFractionDigits: 0, 
      minimumFractionDigits: 0,
   }).format( value );