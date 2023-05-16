'use client'
import { useEffect, useState } from 'react';
type Flag = {country: string, name: string}
type Person = {name: string, country: string, color: string, flag: Flag}


export default function Home() {
  const [countries, setCountries] = useState<Person[]>();
  const [curName, setCurName] = useState<string>();
  const [curCountry, setCurCountry] = useState<string>();
  const [names, setNames] = useState<string[]>();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
      setNames(_ => ['Per','Hansi','Mario'])
      setCurName('Per');
      setCurCountry('Italy');
    });
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
      setCountries(_ => data.map(c=>c.address.city))
    })
  }, []);
  const color = curName === 'Per' ? 'blue' : curName === 'Hansi' ? 'red' : 'green'
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex">
        <div className="flex flex-col mx-12">
          <label>Navn</label>
          <select onChange={(ev) => setCurName(ev.currentTarget.value)}>
            {names?.map(name => <option key={name}>{name}</option>)}
          </select>
        </div>
        <div className="flex flex-col mx-12">
          <label>{curName}</label>
          <svg height={150} width={150}>
            <circle cx={75} cy={20} r={10} fill={color} stroke={color}></circle>
            <path stroke={color} d="M 75 20 V 35 L 95 50 L 75 35 L 55 50 L 75 35 V 60 L 85 90 L 75 60 L 65 90" fillOpacity={0}></path>
            {curCountry === 'Denmark' ? <><path fill="#c8102e" d="M90,0H128V28H90Z"/><path stroke="#fff" strokeWidth="4" d="M90,14h38M104,0v28"/><path stroke="#fff" strokeWidth={2} d="M91,28V48"></path></>:undefined}
            {curCountry === 'Germany' ? <><rect id="black_stripe" width="35" height="9" y="1" x="90" fill="#000"/>
                                          <rect id="red_stripe" width="35" height="9" y="10" x="90" fill="#D00"/>
                                          <rect id="gold_stripe" width="35" height="9" y="19" x="90" fill="#FFCE00"/>
                                          <path stroke="#fff" strokeWidth={2} d="M91,28V48"></path></>:undefined}
            {curCountry === 'Italy' ? <><rect width="36" height="28" x={90} fill="#009246"/>
                                        <rect width="24" height="28" x={90} fill="#fff"/>
                                        <rect width="12" height="28" x={90} fill="#ce2b37"/>
                                        <path stroke="#fff" strokeWidth={2} d="M91,28V48"></path></> :undefined}
          </svg>

        </div>
      </div>
    </main>
  )
}
