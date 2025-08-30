//CLASS 

class RailwayForm{
    submit(){
        alert(`form submitted, Name: ${this.name}, Train: ${this.trainno}`)
    }
    cancel(){
        alert(`This form is Cancelled, Name: ${this.name}, Train: ${this.trainno}`)
    }
    fill(givenName, trainno){
        this.name=givenName;
        this.trainno=trainno;
    }
}

let Form01 = new RailwayForm()
Form01.fill("Avisekh Sabi", 2020202)
let Form02 = new RailwayForm()
Form02.fill("Chinmay Daroga", 2020202)

Form01.submit()
Form02.submit()

Form02.cancel()