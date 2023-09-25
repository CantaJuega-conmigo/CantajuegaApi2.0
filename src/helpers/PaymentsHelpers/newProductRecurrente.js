module.exports = ({////la idea de esta funcion es simplificar el objeto que deba crear el front al momento de crear un producto
  name,
  description,
  custom_terms_and_condition,
  phone_requirement,
  address_requirement,
  billing_info_requirement,
  image_url,
  amount_as_decimal,
  billing_interval,
  billing_interval_count,
  free_trial_interval,
  free_trial_interval_count,
  periods_before_automatic_cancellation,
  periods_before_allowed_to_cancel,
}) => ({
  name: name,
  description: description,
  custom_terms_and_conditions: custom_terms_and_condition ?? 'none',
  phone_requirement: phone_requirement ?? 'none', // "required|optional|none",
  address_requirement: address_requirement ?? 'none', //"required|optional|none",
  billing_info_requirement: billing_info_requirement ?? 'none', //"optional|none",///
  image_url: "https://picsum.photos/200", ///imagen del producto
  cancel_url: "http://localhost:3000/membresias", //a donde redirigira en caso de salir mal
  success_url: "http://localhost:3000/membresias", //a donde redirigira en caso de exito
  prices_attributes: [
    {
      amount_as_decimal: amount_as_decimal,
      currency: "GTQ", ///moneda, podria ser usd
      charge_type: "recurring", //el tipo de pago (recurrente, osea subscripcion en este caso)
      billing_interval_count: billing_interval_count??0, //espesifica el intervalo de cada cuanto se cobrara la membresia
      billing_interval: billing_interval??"week", //"week|month|year",aqui se espesifica el tipo de intervalo, se en conjunto con el de arriba
      free_trial_interval_count: free_trial_interval_count??0, ///intervalo de prueba gratis
      free_trial_interval: free_trial_interval ?? "week", //el tipo de intervalo de prueba gratis
      periods_before_automatic_cancellation: null,
      periods_before_allowed_to_cancel: null,
    },
  ],
});
