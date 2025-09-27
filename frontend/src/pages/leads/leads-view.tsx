import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import {useAppDispatch, useAppSelector} from "../../stores/hooks";
import {useRouter} from "next/router";
import { fetch } from '../../stores/leads/leadsSlice'
import dataFormatter from '../../helpers/dataFormatter';
import LayoutAuthenticated from "../../layouts/Authenticated";
import {getPageTitle} from "../../config";
import SectionTitleLineWithButton from "../../components/SectionTitleLineWithButton";
import SectionMain from "../../components/SectionMain";
import CardBox from "../../components/CardBox";
import BaseButton from "../../components/BaseButton";
import BaseDivider from "../../components/BaseDivider";
import {mdiChartTimelineVariant} from "@mdi/js";
import {SwitchField} from "../../components/SwitchField";
import FormField from "../../components/FormField";

const LeadsView = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { leads } = useAppSelector((state) => state.leads)

    const { id } = router.query;

    function removeLastCharacter(str) {
      console.log(str,`str`)
      return str.slice(0, -1);
    }

    useEffect(() => {
        dispatch(fetch({ id }));
    }, [dispatch, id]);

    return (
      <>
          <Head>
              <title>{getPageTitle('View leads')}</title>
          </Head>
          <SectionMain>
            <SectionTitleLineWithButton icon={mdiChartTimelineVariant} title={removeLastCharacter('View leads')} main>
                <BaseButton
                  color='info'
                  label='Edit'
                  href={`/leads/leads-edit/?id=${id}`}
                />
            </SectionTitleLineWithButton>
            <CardBox>

                <div className={'mb-4'}>
                    <p className={'block font-bold mb-2'}>Name</p>
                    <p>{leads?.name}</p>
                </div>

                <div className={'mb-4'}>
                    <p className={'block font-bold mb-2'}>Status</p>
                    <p>{leads?.status ?? 'No data'}</p>
                </div>

                <div className={'mb-4'}>
                    <p className={'block font-bold mb-2'}>Category</p>

                        <p>{leads?.category?.name ?? 'No data'}</p>

                </div>

                <div className={'mb-4'}>
                    <p className={'block font-bold mb-2'}>Owner</p>

                        <p>{leads?.owner?.firstName ?? 'No data'}</p>

                </div>

                <>
                    <p className={'block font-bold mb-2'}>Activities Lead</p>
                    <CardBox
                      className='mb-6 border border-gray-300 rounded overflow-hidden'
                      hasTable
                    >
                        <div className='overflow-x-auto'>
                            <table>
                            <thead>
                            <tr>

                                <th>Description</th>

                                <th>Date</th>

                            </tr>
                            </thead>
                            <tbody>
                            {leads.activities_lead && Array.isArray(leads.activities_lead) &&
                              leads.activities_lead.map((item: any) => (
                                <tr key={item.id} onClick={() => router.push(`/activities/activities-view/?id=${item.id}`)}>

                                    <td data-label="description">
                                        { item.description }
                                    </td>

                                    <td data-label="date">
                                        { dataFormatter.dateTimeFormatter(item.date) }
                                    </td>

                                </tr>
                              ))}
                            </tbody>
                        </table>
                        </div>
                        {!leads?.activities_lead?.length && <div className={'text-center py-4'}>No data</div>}
                    </CardBox>
                </>

                <>
                    <p className={'block font-bold mb-2'}>Contacts Lead</p>
                    <CardBox
                      className='mb-6 border border-gray-300 rounded overflow-hidden'
                      hasTable
                    >
                        <div className='overflow-x-auto'>
                            <table>
                            <thead>
                            <tr>

                                <th>FirstName</th>

                                <th>LastName</th>

                                <th>Email</th>

                            </tr>
                            </thead>
                            <tbody>
                            {leads.contacts_lead && Array.isArray(leads.contacts_lead) &&
                              leads.contacts_lead.map((item: any) => (
                                <tr key={item.id} onClick={() => router.push(`/contacts/contacts-view/?id=${item.id}`)}>

                                    <td data-label="first_name">
                                        { item.first_name }
                                    </td>

                                    <td data-label="last_name">
                                        { item.last_name }
                                    </td>

                                    <td data-label="email">
                                        { item.email }
                                    </td>

                                </tr>
                              ))}
                            </tbody>
                        </table>
                        </div>
                        {!leads?.contacts_lead?.length && <div className={'text-center py-4'}>No data</div>}
                    </CardBox>
                </>

                <>
                    <p className={'block font-bold mb-2'}>Notes Lead</p>
                    <CardBox
                      className='mb-6 border border-gray-300 rounded overflow-hidden'
                      hasTable
                    >
                        <div className='overflow-x-auto'>
                            <table>
                            <thead>
                            <tr>

                            </tr>
                            </thead>
                            <tbody>
                            {leads.notes_lead && Array.isArray(leads.notes_lead) &&
                              leads.notes_lead.map((item: any) => (
                                <tr key={item.id} onClick={() => router.push(`/notes/notes-view/?id=${item.id}`)}>

                                </tr>
                              ))}
                            </tbody>
                        </table>
                        </div>
                        {!leads?.notes_lead?.length && <div className={'text-center py-4'}>No data</div>}
                    </CardBox>
                </>

                <BaseDivider />

                <BaseButton
                    color='info'
                    label='Back'
                    onClick={() => router.push('/leads/leads-list')}
                />
              </CardBox>
          </SectionMain>
      </>
    );
};

LeadsView.getLayout = function getLayout(page: ReactElement) {
    return (
      <LayoutAuthenticated>
          {page}
      </LayoutAuthenticated>
    )
}

export default LeadsView;
