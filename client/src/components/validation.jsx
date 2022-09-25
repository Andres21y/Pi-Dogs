export default function validate(input) {
    console.log('validation___>', input);
    let errors = {};

    // campos vacios
    let mesagge1 = 'This field is required, please enter information'
    // caracteres especiales
    let mesagge2 = 'invalid input, special characters not allowed'
    // numeros
    let mesagge3 = 'numbers are not allowed in this field'
    // letras
    let mesagge4 = 'letters are not allowed in this field'
    // < >
    let mesagge5 = 'this field should be less than max value'
    // < >
    let mesagge6 = 'max value should be greater than min value'
    // < >
    let mesagge7 = 'These field are required, please enter information'



    //__>Name
    if (/[!@#$%^&*(``)_+¡\-={};':"|,.<>?]/.test(input.name)) errors.name = mesagge2;
    if (input.name) {
        for (let i = 0; i < input.name.length; i++) {
            let x = input.name[i]
            if (/^[0-9]*$/.test(x)) errors.name = mesagge3;
        }
    }
    if (!input.name || input.name === null) errors.name = mesagge1;



    //__>min h
    if (!input.min_Height) errors.min_Height = `${mesagge1}`;
    if (input.min_Height) {
        for (let i = 0; i < input.min_Height.length; i++) {
            let x = input.min_Height[i]
            if (/[^A-Za-z]+/g.test(x)) { }
            else { errors.min_Height = ` ${mesagge4}` }
        }
    }
    if (/[!@#$%^&*()_+¡\-={};':"|,.<>?]+/.test(input.min_Height)) errors.min_Height = `${mesagge2}`;
    if (parseInt(input.min_Height) > parseInt(input.max_Height)) errors.min_Height = `${mesagge5} max height`
    // console.log('--num',input.min_Height);



    //__>max h
    if (!input.max_Height) errors.max_Height = ` ${mesagge1}`;
    if (input.max_Height) {
        for (let i = 0; i < input.max_Height.length; i++) {
            let x = input.max_Height[i]
            if (/[^A-Za-z]+/g.test(x)) { }
            else { errors.max_Height = ` ${mesagge4}` }
        }
    }
    if (/[!@#$%^&*()_+¡\-={};':"|,.<>?]+/.test(input.max_Height)) errors.max_Height = ` ${mesagge2}`;
    if (Number(input.max_Height) < Number(input.min_Height)) errors.max_Height = `${mesagge6} min height`

    //__>min w
    if (!input.min_Weight || input.min_Weight === null) errors.min_Weight = `${mesagge1}`;
    if (input.min_Weight) {
        for (let i = 0; i < input.min_Weight.length; i++) {
            let x = input.min_Weight[i]
            if (/[^A-Za-z]+/g.test(x)) { }
            else { errors.min_Weight = ` ${mesagge4}` }
        }
    }
    if (/[!@#$%^&*()_+¡\-={};':"|,.<>?]+/.test(input.min_Weight)) errors.min_Weight = ` ${mesagge2}`;
    if (Number(input.min_Weight) > Number(input.max_Weight)) errors.min_Weight = ` ${mesagge5} max Weight`


    //__>max w
    if (!input.max_Weight) errors.max_Weight = mesagge1;
    if (input.max_Weight) {
        for (let i = 0; i < input.max_Weight.length; i++) {
            let x = input.max_Weight[i]
            if (/[^A-Za-z]+/g.test(x)) { }
            else { errors.max_Weight = `max value: ${mesagge4}` }
        }
    }
    if (/[!@#$%^&*()_+¡\-={};':"|,.<>?]+/.test(input.max_Weight)) errors.max_Weight = `max Weight: ${mesagge2}`;
    if (Number(input.max_Weight < input.min_Weight)) errors.max_Weight = `max Weight ${mesagge6} min Weight`


    //__>life
    if (!input.life_span_min || !input.life_span_max) errors.life_span = mesagge7;
    if (/[!@#$%^&*()_+¡\-={};':"|,.<>/?]+/.test(input.life_span_min) || /[!@#$%^&*()_+¡\-={};':"|,.<>/?]+/.test(input.life_span_max)) errors.life_span = mesagge2;
    if (Number(input.life_span_min) > Number(input.life_span_max)) errors.life_span = 'min value should be less than max value';

    //__>temp
    if (!input.temperament.length || input.temperament.length < 1) errors.temperament = 'choose one or  more tempmperament please';


    return errors;
};