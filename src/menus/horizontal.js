export default [
  {
    name: 'Home',
    icon: 'mdi-view-dashboard-outline',
    to: { name: 'home' },
    children: [
      { name: 'create', icon: 'mdi-cart-outline', to: { name: 'create' } },
     
    ],
  },
  {
    name: 'Blank Page',
    icon: 'mdi-file-outline',
    to: { name: 'blank' },
  },
  { name: 'Documentation', icon: 'mdi-text-box-outline', href: 'https://docs.icreatorstudio.com/  ', target: '_blank' },
]
