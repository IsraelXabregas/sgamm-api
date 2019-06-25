'use strict'

const Route = use('Route')

Route.get('/', async () => {
  return 'SGAMM API';
});

Route.resource('/patrimonios', 'PatrimonioController').apiOnly();
Route.resource('/encontros', 'EncontroController').apiOnly();