Webcam.set({
    height:300,
    width:300,
    image_format:"jpeg",
    jpeg_quality:90
})

Webcam.attach("#camera")

function capture(){

    Webcam.snap(function(selfie){

        document.getElementById("Snapshot").innerHTML=`<img src=${selfie} id="capturephoto" >`
    })
    
}
console.log("ml5version="+ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XefKCDmC8/model.json",loaded)

function loaded(){

    console.log("model has fully loaded" )
}

function speak(){

    var speech=window.speechSynthesis
    var speakdata="the first prediction of your gesture is "+prediction1
    var speakdata1="and the second preditction of your gesture is"+prediction2
    var say_this=new SpeechSynthesisUtterance(speakdata+speakdata1)
    speech.speak(say_this)
}

function Identify(){

    snapshot=document.getElementById("capturephoto")
    classifier.classify(snapshot, getresult)

    
}

function getresult(error,results){
    
    if (error) {
        console.log(error)
        
    }
    else  {
        console.log(results)

        prediction1=results[0].label
        prediction2=results[1].label
        console.log("prediction1="+ prediction1)
        console.log("prediction2="+ prediction2)

        document.getElementById("gesture1").innerHTML=prediction1
        document.getElementById("gesture2").innerHTML=prediction2
        speak()
        
        if (prediction1=="thumbs up"){
            document.getElementById("emoji1").innerHTML="&#128077;"
        }
        if ( prediction1=="thumbs down"){
            document.getElementById("emoji1").innerHTML="&#128078;"
        }
        if (prediction1=="victory"){
            document.getElementById("emoji1").innerHTML="&#x270C;"

        
        }

        if (prediction1=="perfect"){
            document.getElementById("emoji1").innerHTML="&#x1F44C;"
        }

        if (prediction1=="call"){
            document.getElementById("emoji1").innerHTML="&#x1F919;"
        }

        if (prediction2=="perfect"){
            document.getElementById("emoji2").innerHTML="&#x1F44C;"
        }
        if ( prediction2=="call"){
            document.getElementById("emoji2").innerHTML="&#x1F919;"
        }
        if (prediction2=="victory"){
            document.getElementById("emoji2").innerHTML="&#x270C;"

        
        }

        if (prediction2=="thumbs up"){
            document.getElementById("emoji2").innerHTML="&#128077;"
        }

        if (prediction2=="thumbs down"){
            document.getElementById("emoji12").innerHTML="&#128078;"
        }
    }

}


  