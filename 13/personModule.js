
export const person = {
    
    name : "Aayush Bhandari",
    age : 14 , 
    isStudent : true ,
    socialMediaDetails : {
        gmail : `axy@axy.co`,
        github : `Aayush Bhandariii`,
    },
    studentPackage : false ,

    studentPackageValidator : function() {
        if(!this.studentPackage){
            return `please enable student package by verifying your age`
        }
        return `student package verified`
    },

    displayUserSocialMediaDetails : function(){
        const details = `user gmail : ${this.socialMediaDetails.gmail} & user github : ${this.socialMediaDetails.github}`
        return details
    },

    verifyAge : function(){
        if( this.age <= 18 ){
            this.studentPackage = true
        }
        this.studentPackage = false
        return this.studentPackageValidator()
    },

}

