const { v4: uuidv4 } = require("uuid");
module.exports= [
    {
        id: uuidv4(),
        name: 'Mensual',
        description: 'Todas las herramientas terapéuticas para niñas y niños de 0 a 6 años.',
        price: 49.99,
        duration: 1,
        text1:'Materias de apoyo audiovisual.',
        text2: "Canciones del programa.",
        recurrenteId:'prod_6sl3mnqq',
        checkout:'https://app.recurrente.com/s/cantajuega-conmigo/membresia-estandar'
    },
    {
        id: uuidv4(),
        name: 'trimestral',
        description: 'Todas las herramientas terapéuticas para niñas y niños de 0 a 6 años.',
        price: 199.99,
        duration: 6,
        text1:'Materias de apoyo audiovisual.',
        text2: "Canciones del programa.",
        recurrenteId:'prod_6sl3mnqq',
        checkout:'https://app.recurrente.com/s/cantajuega-conmigo/membresia-trimestral'
    },
    {
        id: uuidv4(),
        name: 'anual',
        description: 'Todas las herramientas terapéuticas para niñas y niños de 0 a 6 años.',
        price: 299.99,
        duration: 12,
        text1:'Materias de apoyo audiovisual.',
        text2: "Canciones del programa.",
        recurrenteId:'prod_6sl3mnqq',
        checkout:'https://app.recurrente.com/s/cantajuega-conmigo/membresia-anual'

    },
    {
        id: uuidv4(),
        name: 'Canta conmigo',
        description: 'Todas las canciones infantiles por etapa de desarrollo.',
        price: 99.99,
        duration: 6,
        text1:'Canciones digitales disponibles.',

        recurrenteId:'prod_6sl3mnqq',
        checkout:'https://app.recurrente.com/s/cantajuega-conmigo/membresia-anual'
    }
]