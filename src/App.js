import React from 'react';
import searchImages from './apı';
import './App.css';
import SearchHeader from './searchHeader';
import { useState } from 'react';
import ImageList from './imageList';

function App() {
  const [images,setimages]=useState([])
  const handleSubmit=async(term)=>{
    
   const result= await searchImages(term);
   setimages(result);
  }
  return (
    <div className="App"><SearchHeader search={handleSubmit}/>
     <ImageList imagePlaceholder={images}/>
    </div>
    // search propsu handle submit metodunu tetikliyor.
    // handleSubmit metodunun yukarıdaki fonksiyon halinde useState ile set etme işlemlerini yaparız.
     // propsları PascalCase olarak yazmalıyız ,öbür türlü hata verir ve çalıştıramayız.SearchHeader,ImageList gibi...
    // form etiketi searchHeader.js componentinda yer alıyor.Burada form submit olduğunda inputtan aldığımız değeri App componentine yollayıp daha sonra child'dan parent'a props ile datayı aktarıp 
    //axios'a datayı istek olarak göndermemiz ,projeyi çaıştırmamızın için izlenecek yol haritasıdır.
    // App ve searchHeader componentlarında gerekli işlemleri yaptıktan sonra npm install axios veya yarn install axios komutu ile axios değişkenini yüklemiş oluruz.Package.json'dan axios versiyonunu 
    // gözlemleyebiliriz.
    // App componentinde set etme işlemini search propsunu searchHeader componentine çektik ve ana fonksiyon olan SearchHeader fonksiyonunun parantezi içinde yazdık ve 
    // useState olayının valueInput ilk değişkenini onun içine atamak vesilesiyle search(valueInput) şeklinde tetikleme yaptığımız handleFormSubmit eventinin içinde kullandık.
    // handleSubmit ve apı child componenti olan searchImages içinde tutulan term değeri inputa yazdığımız değerdir.Buna bakılacak.
    // SearchHeader child componentinda (props) handleFormSubmiti tetiklediğimizde , entera bastığımızda ,App.js componentinde search propsunun içerisindeki handleSubmit içerisinde>>devamı
    // term geçilmiş şeklinde tetikleniyor.handleSubmit içerideki termu alıyor tarayıcıya basıyor.
  );
}

export default App;

