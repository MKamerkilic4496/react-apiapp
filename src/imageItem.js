function ImageItem({image}) {
    console.log(image);
    return <div>
        <img className="imageListimg" src={image.urls.small} alt={image.alt_description}/>
    </div>;
      // propsları PascalCase olarak yazmalıyız ,öbür türlü hata verir ve çalıştıramayız.
     // gelen resultları imageList componentine atadık ,sonra imageıtem componenti açtık.imageItem ise her bir image'e tekabül eden componentdir.Kapsayıcı componentdan bir mapping işlemi ile
    // child componente data aktarmış olacaz.En alt child component ile datayı basma işlemini gerçekleştirmiş olacaz.
}

export default ImageItem;