function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    classifier = ml5.imageClassifier("",modelLoaded);
}