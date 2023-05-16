'use client'
import { useEffect, useState } from 'react';


export default function Home() {
  const [countries, setCountries] = useState<string[]>();
  const [names, setNames] = useState<string[]>();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
      setNames(_ => (data.map(c=>c.name)))
    });
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
      debugger;
      setCountries(_ => data.map(c=>c.address.city))
    })
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex">
        <div className="flex flex-col mx-12">
          <label>Navn</label>
          <select>
            {names?.map(name => <option key={name}>{name}</option>)}
          </select>
        </div>
        <div className="flex flex-col mx-12">
          <label>Land</label>
          <select>
            {countries?.map(country => <option key={country}>{country}</option>)}
          </select>

        </div>
      </div>
    </main>
  )
}
