type ContactForm = {
    nome: string;
    telefone: string;
    email: string;
    cidade: string;
    optionContato: {
        whatsContato: boolean;
        telefoneContato: boolean;
        emailContato: boolean;
    }
    horarioContato: {
        manha: boolean;
        tarde: boolean;
        noite: boolean;
    }
}

type SimpleContactForm = {
    nome: string;
    telefone: string;
    email: string;
    cidade: string;
}

const url = 'https://mailer.etools.com.br/api/send';
const sendTo = 'dev@etools.com.br';
const sendFrom = 'noreply@etools.com.br';

export const sendFormSubmit = (formData: ContactForm) => {
    const form = {
        email: formData.email,
        client: formData.nome,
        sendto: sendTo,
        sendfrom: sendFrom,
        subject: 'TENHA SEU PRÓXIMO IMÓVEL NO MORRO DOS ANJOS',
        origin: 'Morro dos Anjos - Contato Completo',
        fields: {
            'telefone': formData.telefone,
            'cidade': formData.cidade,
            'optionContato': [],
            'horarioContato': []
        },
        requiredFields: [
            'telefone',
            'cidade',
            'optionContato',
            'horarioContato'
        ]
    }

    for (let key in formData.optionContato) {
        // @ts-ignore
        if (formData.optionContato[key]) {
            // @ts-ignore
            form.fields.optionContato.push(key.split('C')[0]);
        }
    }

    for (let key in formData.horarioContato) {
        // @ts-ignore
        if (formData.horarioContato[key]) {
            // @ts-ignore
            form.fields.horarioContato.push(key);
        }
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });
}

export const sendSimpleFormSubmit = (formData: SimpleContactForm) => {
    const form = {
        email: formData.email,
        client: formData.nome,
        sendto: sendTo,
        sendfrom: sendFrom,
        subject: 'QUER SABER MAIS SOBRE O MORRO DOS ANJOS?',
        origin: 'Morro dos Anjos - Contato Simples',
        fields: {
            'telefone': formData.telefone,
            'cidade': formData.cidade
        },
        requiredFields: [
            'telefone', 'cidade'
        ]
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
    });
}