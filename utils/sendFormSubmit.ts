type ContactForm = {
    nome:string;
    telefone:string;
    email:string;
    cidade: string;
    optinContato:{
        whatsContato:boolean;
        telefoneContato:boolean;
        emailContato:boolean;
    }
    horarioContato:{
        manha:boolean;
        tarde:boolean;
        noite:boolean;
    }
}

type SimpleContactForm = {
    nome:string;
    telefone:string;
    email:string;
    cidade: string;
}

export const sendFormSubmit = (formData:ContactForm) => { 
    fetch('https://rota/rotaComplemento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
}

export const sendSimpleFormSubmit = (formData:SimpleContactForm) => { 
    fetch('https://rota/rotaComplemento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
}