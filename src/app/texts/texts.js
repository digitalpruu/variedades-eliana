const title = "Variedades Eliana";
const slogan = "Variedades Eliana: Calidad y bienestar para cada día.";
const email = "variedadeseliana@example.com"; // Cambia este email al correcto
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = ""; // Cambia este número al correcto

const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "En Variedades Eliana, nos dedicamos a ofrecerte los mejores productos de perfumería, cosméticos y artículos de aseo, seleccionados cuidadosamente para satisfacer tus necesidades diarias. Desde fragancias cautivadoras hasta productos de belleza de alta calidad, cada artículo en nuestra tienda ha sido elegido para brindarte bienestar y confianza. Nuestro compromiso es proporcionarte una experiencia de compra única, con productos que te harán sentir y lucir bien todos los días. En Variedades Eliana, la calidad y el servicio son nuestra prioridad, ofreciéndote siempre lo mejor para el cuidado personal."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "",
            p2: slogan,
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/variedadeseliana",
        instagram: "https://www.instagram.com/variedadeseliana",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
