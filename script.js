

const fileInput=document.querySelector("input"),
downloadBtn=document.querySelector("button");


downloadBtn.addEventListener("click" , e =>{
        e.preventDefault(); // preventing form from submitting
        downloadBtn.innerText="Downloading file....";
        fetchFile(fileInput.value) ;
       
});
       function fetchFile(url) {
        // fetching the file & returning as blob
            fetch(url).then(res=> res.blob()).then(file => {
                let tempUrl = URL.createObjectURL(file);
                let aTag =document.createElement("a");
                aTag.href = tempUrl;
                aTag.download = url.replace(/^.[\\\/]/,'') ;
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
                URL.revokeObjectURL(tempUrl);
                downloadBtn.innerHTML="Download File";

            }) .catch(()=>{
                downloadBtn.innerHTML="Download File";
                alert("Failed to download files");
        });
    }