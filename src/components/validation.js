const validation = (values) => {

    let errors={};

    if(!values.fullname){
        errors.fullname="Name field is required!"
    }
    if(!values.email){
        errors.email="Email Address field is required!"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email Address is invalid!"
    }
    if(!values.password){
        errors.password="Password field is required!"
    } else if(values.password.length < 5){
        errors.password="Password must be more than five characters!"
    }
  return errors;
};

export default validation;
