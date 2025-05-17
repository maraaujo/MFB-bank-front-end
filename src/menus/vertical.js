export default [
  { heading: 'Menus' },
  {
    name: 'Lançamentos',
    icon: 'mdi-bank-transfer-out',
    to: { name: 'home' },
     children: [
      { name: 'create', icon: 'mdi-cash-multiple', to: { name: 'create' } },
     
    ],
  },
  // {
  //   name: 'Novo Lancamento',
  //   icon: 'mdi-currency-usd',
  //   to: { name: 'create' },
  // },
 
]
