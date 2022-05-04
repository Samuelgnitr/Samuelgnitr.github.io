
//API used

//YT v3 API Show Vid
let nextPageVideo=""
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC9qjt2nA1EMzC_k6GBD5yDA&maxResults=50&order=date&key=AIzaSyCwQFewxj7tHe9CyC0ZbWcV_tm2opN0nME&pageNext="+nextPageVideo)
    .then((result)=>{
        return result.json()
    }).then((data)=>{
        console.log(data)
        let videos = data.items
        nextPageVideo = data.nextPageVideo
        let videoContainer = document.querySelector(".ytcontainer")
        for(video of videos){
            videoContainer.innerHTML+=`
            <div class="col-md-6 col-xs-12 col-sm-6 portfolio-card-holder">
            <div class="portfolio-img-desc">
                            <h3>${video.snippet.title}</h3>
                            <a href="${video.url}">
                        </div>   
                    <div class=" portfolio-card">
                        <img src="${video.snippet.thumbnails.high.url}" alt="Portfolio" class="img-responsive portfolio-img">

                               
                    </div>
                </div>

            `
        }
    });