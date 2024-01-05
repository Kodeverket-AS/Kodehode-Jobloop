"use client"
import AliceCarousel from "react-alice-carousel"
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image"
import PortableText from "react-portable-text";


export function ScrollElement(content, Image, _id){
  return(
    
    <div className="flex flex-col w-full p-10" > 

        <div> 
          <Image 
          width={800}
          height={800}
          className="w-full"  
          src={Image}/>
        </div>

        <div> 
          <PortableText content={content}></PortableText>
        </div>
        
     </div>

  )
}




export function ProjectScroll({ImageGlod, ImageFont, contentOne, contentTwo}){
 
let ImageAarray =[ 

  <ScrollElement content={contentTwo} Image={ImageGlod} ></ScrollElement>
  , 
  
  <ScrollElement content={contentOne} Image={ImageFont} ></ScrollElement>
  



 
 
      
    ]  

 


// const data = content?.map((item) => {

//   console.log(item.content[0])

//   return(
   
//         <div key={item._id} className=" flex flex-col w-full"> 
//                <div>
//                   <p>{item.content}</p>
//                 </div>
//          </div> 
    
//   )

  
    
// })

const responsiveSettings = {
  0: { items: 1 },
  1024: { items: 3 },
  1280: { items: 3 },
};


return(
  <div className="w-full flex "> 
    <AliceCarousel
    className="flex flex-row items-center justify-center w-full overflow-hidden "
    items={ImageAarray}
    itemfit="cover"
    responsive={responsiveSettings}
    />
 </div>
)





}





{/* <div className="flex flex-col items-center justify-center w-full ">
    <div className="flex gap-7 w-full">
      <div className="w-4/6 flex items-center">

   



       <Image
                width={500}
                height={500}
                className="w-full" 
                key={item._id}
                scr={item.ImageTwo}></Image>
        
      <AliceCarousel
        className="flex flex-col items-center justify-center overflow-hidden w-full "
        items={data}
        itemfit="cover"
        />
        
      </div>
    </div>
  </div> */}


  // bilde1
    // bilde2
    // tekst  
    
    // <div  className="bg-blue w-full"> 
    // <>{data}</>
    // </div>


// export function ScrollElement({image, _id, text}){
//     return(
//         <div key={_id}>
                
//               /  <Image 
//                 width={500}
//                 height={500}
//                 className="w-full" 
//                 src={image}>

//                 </Image>

        

//          </div>
//     )
// }

// Array av data som et hentet inn


// scroll funksjon



   
    
//     const [scrollImage, setScrollImage]= useState(0)
// //gjøre klikk til neste i array
    
 
    
    
//     const nextProjectImage = () => {
       
//         if (scrollImage=== ImageAarray.length - 1) setScrollImage(0);
//         else setScrollImage(scrollImage + 1);

    
//     }
        
//     return(
//         <div key={_id} className="w-full flex flex-row"> 
       
//              {ImageAarray.map((index, image) => {
            
                
//                    <Image
//                     width={800}
//                     height={800}
//                     className="w-full" 
//                     key={index}
//                     src={image}
//                     alt="samarbeidsprosjekter">
                
//                     </Image>

//                console.log(<Image/>)
                    
//            })}
             
//             <button  className="w-10px bg-jobloop-orange">neste</button>
//          </div>   
         
        
//     )   
        
        
    
            
    
// }




// i++
// let newArr = textAray[i]
// onClick={nextProjectImage}

// let i = 0
// const textAray =['hello ', 'My name is Anders', 'I am from Bergen', 'I am bad at coding']

// setScrollImage(newArr)
// if(textAray[i] > textAray.length ){ } else {setScrollImage(textAray[0])} else {setScrollImage(textAray[0])} if(textAray[i] > textAray.length-1 ){
    
// ImageFont={data.VisionSections[0].ImageTwo} ImageGlod={data.VisionSections[1].ImageTwo