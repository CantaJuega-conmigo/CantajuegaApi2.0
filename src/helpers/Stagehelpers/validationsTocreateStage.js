const { getIncorrectAtributtesBody } = require("../../utils");

module.exports =  (req) => {
  try {
    const correctAtributtes = ["name", "description", "minAge", "maxAge"];
    const optionalAtributtes = ["content"];
    getIncorrectAtributtesBody(correctAtributtes,req,5,optionalAtributtes);
    const isNumber = /^\d+$/;
    const {name,description,minAge,maxAge,content}=req.body;
    if(name.length>25) throw new Error('The name is very long.')
    if(description.length>80) throw new Error('The description is very long.')
    if(`${minAge}`.length >2 || `${maxAge}`.length>2) throw new Error('Invalid age.')
    if(minAge>maxAge) throw new Error('minAge cannot be bigger than maxAge')
    if(minAge===maxAge) throw new Error('maxAge cannot be  same to minAge')
    if(!isNumber.test(minAge)||!isNumber.test(maxAge)) throw new Error('minAge and Maxage must be  numbers.')
    if(content){
        if(typeof content !== 'object' ) throw new Error ('content must be an object.')
        if(typeof content?.pdf !== 'object' ) throw new Error ('pdf must be an object.')
        if(typeof content.videos !== 'object' ) throw new Error ('videos must be an object.')
        if(!content.pdf) throw new Error ('Content must have a pdf.')
        if(!content.pdf?.name) throw new Error('Pdf must have a name.')
        if(content.pdf?.name.length >20) throw new Error('Invalid pdf name, pdf is very long.')
        if(!content.pdf?.content) throw new Error('Content is necessary in pdf ,must be an url to pdf.')
        if(content.pdf?.content.length <3) throw new Error('Invalid pdf url.');
        if(!content.videos) throw new Error ('You need to add videos.');
        if(!Array.isArray( content.videos)) throw new Error('videos must be an array');
        if(content.videos.length>15) throw new Error('Bad request, 15 videos is the limit.')
        if(content.videos){
            let videosnames=[];
            content.videos.forEach(element => {
                if(typeof element !=='object') throw new Error('invalid body,only objects in array of videos')
                if(!element.title) throw Error('The videos must be a title');
                if(element.title.length>60 ||element.content?.length>30) throw Error(`Bad resquest`);
                if(element.title.length>35) throw Error(`${element.title} is a long title.`);
                if(!element.content) throw Error('The videos must be a content');
                if(element.content.length>20) throw Error(`${element.content} is a long content .`);
                if(typeof element !=='object') throw new Error('videos array only must have a objects');
                if(!element.order) throw new Error('Each video must be an order.');
                if(!element?.order?.includes('_Video')) throw new Error(`${element.order} is an invalid order of video: ${element.title}`)
                if(videosnames.includes(element.order)) throw new Error (`Cannot repeat the same order:${element.order} in ${element.title}`)
                videosnames.push(element?.order);
            });
            const totalvideos=content.videos.length??0;
            if(!totalvideos) throw new Error('Error in server,please check you are included videos');
            if(content.videos[0].order!=='First_Video') throw new Error('First_Video is neccesary')
            if(content.videos[totalvideos-1].order!=='Final_Video') throw new Error('Final_Video is neccesary,please add information about this.')
        }
        
    }
    return true
  } catch (error) {
    throw error;
  }
};
