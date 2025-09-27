import * as icon from '@mdi/js';
import Head from 'next/head'
import React from 'react'
import axios from 'axios';
import type { ReactElement } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import BaseIcon from "../components/BaseIcon";

import Link from "next/link";
import { useAppSelector } from '../stores/hooks';
const Dashboard = () => {
    const iconsColor = useAppSelector((state) => state.style.iconsColor);
    const corners = useAppSelector((state) => state.style.corners);
    const cardsStyle = useAppSelector((state) => state.style.cardsStyle);

    const loadingMessage = 'Loading...'

    const [users, setUsers] = React.useState(loadingMessage);
    const [activities, setActivities] = React.useState(loadingMessage);
    const [categories, setCategories] = React.useState(loadingMessage);
    const [contacts, setContacts] = React.useState(loadingMessage);
    const [leads, setLeads] = React.useState(loadingMessage);
    const [notes, setNotes] = React.useState(loadingMessage);

    async function loadData() {
        const entities = ['users','activities','categories','contacts','leads','notes',];
        const fns = [setUsers,setActivities,setCategories,setContacts,setLeads,setNotes,];

        const requests = entities.map((entity, index) => {
            return axios.get(`/${entity.toLowerCase()}/count`);
        });

        Promise.allSettled(requests).then((results) => {
            results.forEach((result, i) => {
                if (result.status === 'fulfilled') {
                    fns[i](result.value.data.count);
                } else {
                    fns[i](result.reason.message);
                }
            });
        });
    }

  React.useEffect(() => {
      loadData().then();
  }, []);

  return (
    <>
      <Head>
        <title>
            {'Overview'}
        </title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
            icon={icon.mdiChartTimelineVariant}
            title={'Overview'}
            main>
          {''}
        </SectionTitleLineWithButton>

        <div id="dashboard" className='grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6'>

            <Link href={'/users/users-list'}>
                <div
                    className={`${corners !== 'rounded-full'? corners : 'rounded-3xl'} dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
                >
                    <div className="flex justify-between align-center">
                        <div>
                            <div className="text-lg leading-tight   text-gray-500 dark:text-gray-400">
                              Users
                            </div>
                            <div className="text-3xl leading-tight font-semibold">
                                {users}
                            </div>
                        </div>
                        <div>
                            <BaseIcon
                                className={`${iconsColor}`}
                                w="w-16"
                                h="h-16"
                                size={48}
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                path={icon.mdiAccountGroup || icon.mdiTable}
                            />
                        </div>
                    </div>
                </div>
            </Link>

            <Link href={'/activities/activities-list'}>
                <div
                    className={`${corners !== 'rounded-full'? corners : 'rounded-3xl'} dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
                >
                    <div className="flex justify-between align-center">
                        <div>
                            <div className="text-lg leading-tight   text-gray-500 dark:text-gray-400">
                              Activities
                            </div>
                            <div className="text-3xl leading-tight font-semibold">
                                {activities}
                            </div>
                        </div>
                        <div>
                            <BaseIcon
                                className={`${iconsColor}`}
                                w="w-16"
                                h="h-16"
                                size={48}
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                path={'mdiCalendarCheck' in icon ? icon['mdiCalendarCheck' as keyof typeof icon] : icon.mdiTable || icon.mdiTable}
                            />
                        </div>
                    </div>
                </div>
            </Link>

            <Link href={'/categories/categories-list'}>
                <div
                    className={`${corners !== 'rounded-full'? corners : 'rounded-3xl'} dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
                >
                    <div className="flex justify-between align-center">
                        <div>
                            <div className="text-lg leading-tight   text-gray-500 dark:text-gray-400">
                              Categories
                            </div>
                            <div className="text-3xl leading-tight font-semibold">
                                {categories}
                            </div>
                        </div>
                        <div>
                            <BaseIcon
                                className={`${iconsColor}`}
                                w="w-16"
                                h="h-16"
                                size={48}
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                path={'mdiTag' in icon ? icon['mdiTag' as keyof typeof icon] : icon.mdiTable || icon.mdiTable}
                            />
                        </div>
                    </div>
                </div>
            </Link>

            <Link href={'/contacts/contacts-list'}>
                <div
                    className={`${corners !== 'rounded-full'? corners : 'rounded-3xl'} dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
                >
                    <div className="flex justify-between align-center">
                        <div>
                            <div className="text-lg leading-tight   text-gray-500 dark:text-gray-400">
                              Contacts
                            </div>
                            <div className="text-3xl leading-tight font-semibold">
                                {contacts}
                            </div>
                        </div>
                        <div>
                            <BaseIcon
                                className={`${iconsColor}`}
                                w="w-16"
                                h="h-16"
                                size={48}
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                path={'mdiContactMail' in icon ? icon['mdiContactMail' as keyof typeof icon] : icon.mdiTable || icon.mdiTable}
                            />
                        </div>
                    </div>
                </div>
            </Link>

            <Link href={'/leads/leads-list'}>
                <div
                    className={`${corners !== 'rounded-full'? corners : 'rounded-3xl'} dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
                >
                    <div className="flex justify-between align-center">
                        <div>
                            <div className="text-lg leading-tight   text-gray-500 dark:text-gray-400">
                              Leads
                            </div>
                            <div className="text-3xl leading-tight font-semibold">
                                {leads}
                            </div>
                        </div>
                        <div>
                            <BaseIcon
                                className={`${iconsColor}`}
                                w="w-16"
                                h="h-16"
                                size={48}
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                path={'mdiAccount' in icon ? icon['mdiAccount' as keyof typeof icon] : icon.mdiTable || icon.mdiTable}
                            />
                        </div>
                    </div>
                </div>
            </Link>

            <Link href={'/notes/notes-list'}>
                <div
                    className={`${corners !== 'rounded-full'? corners : 'rounded-3xl'} dark:bg-dark-900 ${cardsStyle} dark:border-dark-700 p-6`}
                >
                    <div className="flex justify-between align-center">
                        <div>
                            <div className="text-lg leading-tight   text-gray-500 dark:text-gray-400">
                              Notes
                            </div>
                            <div className="text-3xl leading-tight font-semibold">
                                {notes}
                            </div>
                        </div>
                        <div>
                            <BaseIcon
                                className={`${iconsColor}`}
                                w="w-16"
                                h="h-16"
                                size={48}
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                path={'mdiNoteText' in icon ? icon['mdiNoteText' as keyof typeof icon] : icon.mdiTable || icon.mdiTable}
                            />
                        </div>
                    </div>
                </div>
            </Link>

        </div>
      </SectionMain>
    </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Dashboard
