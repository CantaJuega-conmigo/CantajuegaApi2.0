const { v4: uuidv4 } = require("uuid");
module.exports= [
    {
        id: uuidv4(),
        name: 'Mensual',
        description: '⦁	Todas las herramientas terapéuticas para niñas y niños de 0 a 6 años',
        price: 49.99,
        duration: 1,
        videos: true,
        music: true,
        therapeuticTools: true,
        recurrenteId:'prod_6sl3mnqq'
        // recurrenteId:'prod_wmqaobmf'
    },
    {
        id: uuidv4(),
        name: 'Semestral',
        description: '⦁	Todas las herramientas terapéuticas para niñas y niños de 0 a 6 años',
        price: 199.99,
        duration: 6,
        videos: true,
        music: true,
        therapeuticTools: true,
        recurrenteId:'prod_6sl3mnqq'
        // recurrenteId:'prod_wmqaobmf'
    },
    {
        id: uuidv4(),
        name: 'anual',
        description: '⦁	Todas las herramientas terapéuticas para niñas y niños de 0 a 6 años',
        price: 299.99,
        duration: 12,
        videos: true,
        music: true,
        therapeuticTools: true,
        recurrenteId:'prod_6sl3mnqq'
        // recurrenteId:'prod_wmqaobmf'

    },
    {
        id: uuidv4(),
        name: 'Canta conmigo',
        description: '⦁	Todas las herramientas terapéuticas para niñas y niños de 0 a 6 años',
        price: 99.99,
        duration: 6,
        videos: false,
        therapeuticTools: false,
        music: true,
        recurrenteId:'prod_6sl3mnqq'
        // recurrenteId:'prod_wmqaobmf'
    }
]