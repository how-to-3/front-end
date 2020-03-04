//username


export default function validation(values){

    let errors = {};
    //username 
    //more than 0 characters 

    if(!values.UserName){
        errors.UserName = "Username is required";
    }   else if (!/\S+@\S+\.\S+/.test(values.UserName)){
        errors.UserName = "Username is invalid"
    }
    //password 
    //more than 6 characters 
    //string more than 0 characters 
    if (!values.PassWord){
        errors.PassWord = "Password is required";
    }   else if (values.PassWord.length < 10){
            errors.PassWord = "Password needs to be atleast than 7 characters"
        }
    }
    return errors
