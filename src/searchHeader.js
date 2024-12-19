import React from 'react';
import { useState } from 'react';
function SearchHeader({search}) {
  const[valueInput,setValue]=useState('')
  const handleFormSubmit=(event)=>{
    event.preventDefault();
    // debugger;
    // formun varsayılanı olan defaultunu engelle manasına gelir.
     search(valueInput);
  };
    const handleChange=(event)=>{
        setValue(event.target.value);
    }
    // form tetikleme kısmı:
    return <div className="searchDiv">
             <form onSubmit={handleFormSubmit}>
               <label>Ne Arıyorsunuz?</label>
               <input value={valueInput} onChange={handleChange}/>
               {/* <div>{valueInput}</div>              */}
              </form>
           </div>;
          //  Burdaki onSubmit props değil eventdır.Bu formu tetikler.
          // search propsunu searchHeader fonksiyonuna yazarken en başta {} açmaksızın yazdık ve hata aldık.{} bu parantezi kullanmaya dikkat edelim.
          // inputun içerisinde yer alan onChange'in görevi:yukarıda açtığımız useState'i en başta boş olarak tanımladık.
}

export default SearchHeader;