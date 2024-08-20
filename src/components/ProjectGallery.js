import React, {useEffect} from "react";
import Next from "../components/images/next-arrow.png";

const ProjectGallery = () => {

    useEffect(() => {
        let vidURLS = ["https://www.youtube.com/embed/vY729pjq5Ao?si=U7S8xHAs9fEULaLN", "https://www.youtube.com/embed/Y0om3jl_gss?si=blvXzixXfUXuswJI", 
            "https://www.youtube.com/embed/_s0spHc6P7M?si=7bQ7FB0GzDQMcmo7","https://www.youtube.com/embed/_eIpTtzS0ho?si=4PB94Bi_ZMHXR3jZ",
        "https://www.youtube.com/embed/Ui3tI1x4zHk?si=wyEw-SNONZ9XwB2V", "https://www.youtube.com/embed/WYm7K3Q7Y_8?si=NjJ0KL0LhrH_pug3"];

        let container = document.getElementById("Gallery-container");
        container.replaceChildren();
        document.getElementById("Back-butn").disabled = true;
        document.getElementById("Next-butn").disabled = false;
        if(window.innerWidth < 1150){
            let video = document.createElement('iframe');
            video.src = vidURLS[0];
            video.id = "Project-vid";
            video.height = "200";
            video.width = "320";
            video.frameBorder = "0";
            video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            video.referrerpolicy = "strict-origin-when-cross-origin";
            video.allowFullscreen = true;
            container.insertAdjacentElement('afterbegin', video);
        }
        else {
            for(let i = 0; i <= 2; i++){
                let video = document.createElement('iframe');
                video.src = vidURLS[i];
                video.id = "Project-vid";
                video.height = "200";
                video.width = "320";
                video.frameBorder = "0";
                video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                video.referrerpolicy = "strict-origin-when-cross-origin";
                video.allowFullscreen = true;
                container.insertAdjacentElement('afterbegin', video);
            }
        }
        
    }, []);

    window.onresize = (event) => {
        if(window.innerWidth <= 1150){
            window.location.reload();
        }
        if(window.innerWidth > 1150){
            window.location.reload();
        }
    };

    

    let vidURLS = ["https://www.youtube.com/embed/vY729pjq5Ao?si=U7S8xHAs9fEULaLN", "https://www.youtube.com/embed/Y0om3jl_gss?si=blvXzixXfUXuswJI", 
        "https://www.youtube.com/embed/_s0spHc6P7M?si=7bQ7FB0GzDQMcmo7","https://www.youtube.com/embed/_eIpTtzS0ho?si=4PB94Bi_ZMHXR3jZ",
    "https://www.youtube.com/embed/Ui3tI1x4zHk?si=wyEw-SNONZ9XwB2V", "https://www.youtube.com/embed/WYm7K3Q7Y_8?si=NjJ0KL0LhrH_pug3"];
        
    const nextOne = (current) => {
        if(current + 2 >= vidURLS.length){
            document.getElementById("Next-butn").disabled = true;
        }
        document.getElementById("Back-butn").disabled = false;
        let container = document.getElementById("Gallery-container");
        container.replaceChildren();
        let video = document.createElement('iframe');
        video.src = vidURLS[current + 1];
        video.id = "Project-vid";
        video.height = "200";
        video.width = "320";
        video.frameBorder = "0";
        video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        video.referrerpolicy = "strict-origin-when-cross-origin";
        video.allowFullscreen = true;
        container.insertAdjacentElement('afterbegin', video);
    }

    const backOne = (current) => {
        if(current -1 <= 0){
            document.getElementById("Back-butn").disabled = true;
        }
        document.getElementById("Next-butn").disabled = false;
        let container = document.getElementById("Gallery-container");
        container.replaceChildren();
        let video = document.createElement('iframe');
        video.src = vidURLS[current -1];
        video.id = "Project-vid";
        video.height = "200";
        video.width = "320";
        video.frameBorder = "0";
        video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        video.referrerpolicy = "strict-origin-when-cross-origin";
        video.allowFullscreen = true;
        container.insertAdjacentElement('afterbegin', video);
        
    }
    
    
    const nextThree = (current) => {
        if(current + 4 >= vidURLS.length){
            document.getElementById("Next-butn").disabled = true;
        }
        document.getElementById("Back-butn").disabled = false;
        
        let container = document.getElementById("Gallery-container");
        container.replaceChildren();
        let max = current + 3;
        for(let i = current +1; i <= max; i++){
            let video = document.createElement('iframe');
            video.src = vidURLS[i];
            video.id = "Project-vid";
            video.height = "200";
            video.width = "320";
            video.frameBorder = "0";
            video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            video.referrerpolicy = "strict-origin-when-cross-origin";
            video.allowFullscreen = true;
            container.insertAdjacentElement('afterbegin', video);
        }
    }

    const backThree = (current) => {
        if(current -5 <= 0){
            document.getElementById("Back-butn").disabled = true;
        }
        document.getElementById("Next-butn").disabled = false;
        
        let container = document.getElementById("Gallery-container");
        container.replaceChildren();
        let max = current - 1;
        let videos = [];
        for(let i = current - 3; i <= max; i++){
            let video = document.createElement('iframe');
            video.src = vidURLS[i];
            video.id = "Project-vid";
            video.height = "200";
            video.width = "320";
            video.frameBorder = "0";
            video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            video.referrerpolicy = "strict-origin-when-cross-origin";
            video.allowFullscreen = true;
            videos.push(video);
        }
        let newVids = videos.reverse();
        newVids.forEach((item) => {
            container.insertAdjacentElement('afterbegin', item);
        })
        
    }
    

    return(
        <div className="Project-gallery">
            <button onClick={(() => {
                let container = document.getElementById("Gallery-container");
                let firstVid = container.firstChild.src;
                let index = vidURLS.indexOf(`${firstVid}`);
                if(window.innerWidth < 1150){
                    backOne(index);
                } else {
                    backThree(index)
                }
            })} id="Back-butn"><img src={Next} alt="Back" className="Back-button" /></button>
            <div id="Gallery-container">

            </div>
            <button onClick={(() => {
                let container = document.getElementById("Gallery-container");
                let firstVid = container.firstChild.src;
                let index = vidURLS.indexOf(`${firstVid}`);
                if(window.innerWidth < 1150){
                    nextOne(index);
                } else {
                    nextThree(index)
                }
                
            })} id="Next-butn"><img src={Next} alt="Next" className="Next-button" /></button>
        </div>
    )
}
export default ProjectGallery;