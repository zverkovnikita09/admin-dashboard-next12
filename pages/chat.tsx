import Layout from "@/application/components/Layout/Layout";
import Chat from "@/application/components/screen/Chat/Chat";
import { IChatContacts } from "@/application/types/apiTypes";
import Head from "next/head";

export default function ChatPage(){
  const contacts: IChatContacts[] = [
    {date: '12 фев', name: 'Иван', surname: 'Иванов', text: 'Hi, how are you?'},
    {date: '15 мар', name: 'Алексей', surname: 'Алексеев', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda incidunt qui sint reprehenderit. Alias esse perspiciatis amet dolorum minus?'},
    {date: '10 мая', name: 'Федор', surname: 'Федоров', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda'},
    {date: '5 фев', name: 'Петр', surname: 'Петров', text: ''},
    {date: '21 сен', name: 'Александр', surname: 'Александров', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda incidunt qui sint reprehenderit. Alias esse perspiciatis amet dolorum minus assumenda incidunt qui sint reprehenderit. Alias esse perspiciatis amet dolorum minus?'},
    {date: '12 фев', name: 'Иван', surname: 'Иванов', text: 'Hi, how are you?'},
    {date: '15 мар', name: 'Алексей', surname: 'Алексеев', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda incidunt qui sint reprehenderit. Alias esse perspiciatis amet dolorum minus?'},
    {date: '10 мая', name: 'Федор', surname: 'Федоров', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda'},
    {date: '5 фев', name: 'Петр', surname: 'Петров', text: ''},
    {date: '21 сен', name: 'Александр', surname: 'Александров', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda incidunt qui sint reprehenderit. Alias esse perspiciatis amet dolorum minus assumenda incidunt qui sint reprehenderit. Alias esse perspiciatis amet dolorum minus?'}
  ]
  return <>
    <Head>
      <title>Чат</title>
    </Head>
    <Layout>
      <Chat contacts={contacts}/>
    </Layout>
  </>
}