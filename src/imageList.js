import ImageItem from "./imageItem";
function ImageList({imagePlaceholder}) {
    return <div className="imageList">
         {imagePlaceholder.map((image,index)=>{
            return <ImageItem key={index} image={image}/>
            // propsları PascalCase olarak yazmalıyız ,öbür türlü hata verir ve çalıştıramayız.
            // imagelist ,imageıtemin kapsayıcısıdır.
         })}
    </div>;
}

export default ImageList;