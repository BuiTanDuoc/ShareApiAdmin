import * as icon from '@mdi/js';
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: icon.mdiViewDashboardOutline,
    label: 'Dashboard',
  },

  {
    href: '/users/users-list',
    label: 'Users',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiAccountGroup ?? icon.mdiTable,
    permissions: 'READ_USERS'
  },
  {
    href: '/activities/activities-list',
    label: 'Activities',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiCalendarCheck' in icon ? icon['mdiCalendarCheck' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_ACTIVITIES'
  },
  {
    href: '/categories/categories-list',
    label: 'Categories',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiTag' in icon ? icon['mdiTag' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_CATEGORIES'
  },
  {
    href: '/contacts/contacts-list',
    label: 'Contacts',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiContactMail' in icon ? icon['mdiContactMail' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_CONTACTS'
  },
  {
    href: '/leads/leads-list',
    label: 'Leads',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiAccount' in icon ? icon['mdiAccount' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_LEADS'
  },
  {
    href: '/notes/notes-list',
    label: 'Notes',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'mdiNoteText' in icon ? icon['mdiNoteText' as keyof typeof icon] : icon.mdiTable ?? icon.mdiTable,
    permissions: 'READ_NOTES'
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: icon.mdiAccountCircle,
  },

 {
    href: '/api-docs',
    target: '_blank',
    label: 'Swagger API',
    icon: icon.mdiFileCode,
    permissions: 'READ_API_DOCS'
  },
]

export default menuAside
